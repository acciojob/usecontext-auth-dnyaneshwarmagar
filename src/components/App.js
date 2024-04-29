import React, { useState, useContext } from 'react';

// Create AuthContext
const AuthContext = React.createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const toggleAuthenticated = () => {
    setAuthenticated((prevAuthenticated) => !prevAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Auth component
const Auth = () => {
  const { authenticated, toggleAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h2>Authentication Status: {authenticated ? 'Authenticated' : 'Not Authenticated'}</h2>
      <label>
        <input type="checkbox" onChange={toggleAuthenticated} />
        I'm not a robot
      </label>
    </div>
  );
};

// App component
function App() {
  return (
    <AuthProvider>
      <div>
        <h1>Authentication Flow</h1>
        <Auth />
      </div>
    </AuthProvider>
  );
}

export default App;

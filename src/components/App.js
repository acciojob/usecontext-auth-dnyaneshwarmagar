import React, { useState, useContext } from 'react';

// Create a context to manage authentication status
const AuthContext = React.createContext();

// AuthProvider component to wrap the application with the authentication context
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  // Function to toggle authentication status
  const toggleAuthentication = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

// Auth component to display authentication status and checkbox
const Auth = () => {
  const { authenticated, toggleAuthentication } = useContext(AuthContext);

  return (
    <div>
      <p className="authText">Authentication Status: {authenticated ? 'You are now authenticated, you can proceed' : 'you are not authenticated'}</p>
      <label>
        <input type="checkbox" onChange={toggleAuthentication} />
        I'm not a robot
      </label>
    </div>
  );
};

// App component
const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Click on the checkbox to get authenticated</h1>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;

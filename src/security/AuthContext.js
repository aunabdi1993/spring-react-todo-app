import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {

const [isAuthenticated, setIsAuthenticated] = useState(false);

function login(username, password) {
  if(username === "admin" && password === "admin") {
    setIsAuthenticated(true)
    return true
  } else {
    setIsAuthenticated(false)
    return false
  }
}

  return (
    <AuthContext.Provider value={ {login} }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
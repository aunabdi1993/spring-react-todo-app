import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {

const [isAuthenticated, setIsAuthenticated] = useState(false);
const valuesToBeShared = {isAuthenticated, setIsAuthenticated};

  return (
    <AuthContext.Provider value={ valuesToBeShared }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
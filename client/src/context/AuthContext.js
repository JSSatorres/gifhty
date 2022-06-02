import { createContext, useContext } from "react";
import React from "react";

//create the context
export const AuthContext = createContext(null);

//custom hook who is the imported hook in the ohter components
export const useAuth = () => {
  const user = useContext(AuthContext);
  return user;
};

// the provider to consume the value which embraces the other components
const AuthProvider = ({ children }) => {
  const user = {
    login: true,
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

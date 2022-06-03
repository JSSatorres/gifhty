import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import {auth} from "../firebae/firebase"
import { onAuthStateChanged } from "firebase/auth";

//create the context
export const AuthContext = createContext(null);

//custom hook who is the imported hook in the ohter components
export const useAuth = () => {
  const user = useContext(AuthContext);
  return user;
};

// the provider to consume the value which embraces the other components
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
      console.log(loading);
      console.log(user);
    })}, []);


  return (
    <AuthContext.Provider value={{ user,loading }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

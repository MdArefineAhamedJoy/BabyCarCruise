import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const singUpUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

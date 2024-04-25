import React, { createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
   import { app } from "./FirebaseFirestore"

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = ({ children }) => {
  const auth = getAuth(app);
const createSignUp=(email,password)=>{return createUserWithEmailAndPassword(auth, email, password)}







  return (
    <FirebaseContext.Provider value={{ createSignUp}}>
      {children}
    </FirebaseContext.Provider>
  );
};

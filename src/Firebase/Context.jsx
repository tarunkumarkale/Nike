import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
   import { app } from "./FirebaseFirestore"

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = ({ children }) => {
  const auth = getAuth(app);
const createSignUp=(email,password)=>{return createUserWithEmailAndPassword(auth, email, password)}

const createSignIn=(email,password)=>{return   signInWithEmailAndPassword(auth, email, password)}

///////////////////////////////////////////////////////////////////////////////////////////

const [check,setcheck]=useState(null)

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user)  setcheck(user)
    else console.log('not here') 
    
  });
},[])

let start=check?true:false
console.log(check)





  return (
    <FirebaseContext.Provider value={{ createSignUp,createSignIn,start}}>
      {children}
    </FirebaseContext.Provider>
  );
};

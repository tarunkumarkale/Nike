import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const FirebaseContext=createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider=(props)=>{

const SignUp=()=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => {
     console.log(error)
      });
}
   
    
    

    return(
        <FirebaseContext.Provider value={SignUp}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)


const createNewUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    setLoading(true)
  return signOut(auth)
}

const userLogin = (email,password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password);
}

const updateUserProfile=(updateData)=>{
    return updateProfile(auth.currentUser,updateData);
}

const authUser = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,

    }

// loading loged in user data after reload the page
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(user)=>{
        setUser(user)
        setLoading(false)
    })
    return () =>{unSubscribe();}
},[])

    return <AuthContext.Provider  value={authUser} >
         {children}
    </AuthContext.Provider>
};

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading]= useState(true);

    // set 
    console.log(user);

    // Register
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut =()=>{
        return signOut(auth);
    }

    // onAuthStateChanged
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authData ={
        user,
        setUser,

        createUser,
        logOut,
        signIn,

        loading,
        setLoading,

    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
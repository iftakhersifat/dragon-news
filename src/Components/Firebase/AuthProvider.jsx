import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // set 
    console.log(user);

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut =()=>{
        return signOut(auth);
    }

    // onAuthStateChanged
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
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

    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
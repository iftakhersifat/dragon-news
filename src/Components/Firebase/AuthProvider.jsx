import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        email : "habu@programing.com",
        name: "habu vai"
    })

    const authData ={
        user,
        setUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
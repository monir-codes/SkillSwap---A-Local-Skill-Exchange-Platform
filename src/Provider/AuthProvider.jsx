import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return unSubscribe;
    }, [])

const AuthData = {
    user,
    setUser,
    loading,
    updateUserProfile,


}

    return <AuthContext value={AuthData}>{children}</AuthContext>
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

// firebase getAuth and app 
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// context 
export const AuthContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithPopUpGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithPopUpGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const userUpdate = name => {
        setLoading(true);
       return updateProfile(auth.currentUser, {displayName: name});
    }

    const logoutUser = () => {
        setLoading(true);
       return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false);
        })

        return () => unsubscribe;
    },[])

    //Passing  data here using context value 
    const userInfo = {
        user, 
        setUser, 
        createUser, 
        loginUser,
        loginWithPopUpGoogle,
        loginWithPopUpGitHub,
        userUpdate,
        logoutUser,
        loading
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default Context;
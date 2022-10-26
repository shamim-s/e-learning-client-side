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


    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithPopUpGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithPopUpGitHub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const userUpdate = name => {
       return updateProfile(auth.currentUser, {displayName: name});
    }

    const logoutUser = () => {
       return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
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
        logoutUser
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
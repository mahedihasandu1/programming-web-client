import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../FirebaseConfig/firebseConfig";
import '../App.css'
import { useEffect } from "react";




export const AuthContext = createContext()

const auth = getAuth(app);


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [ theme, SetTheme ] = useState(false)
    const [ loading, setLoading ] = useState(true)


    const createUSer = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = (facebookProvider) => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
                setUser(currentUser);
            setLoading(false);
        });
        return () => { unsubscribe() }
    }, []);

    const userInfo = { user, loading, setLoading, createUSer, verifyEmail, updateUserProfile, signIn, logOut,  SetTheme, theme, googleLogin, facebookLogin }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
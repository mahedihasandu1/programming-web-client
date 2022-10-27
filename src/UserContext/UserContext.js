import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../FirebaseConfig/firebseConfig";
import '../App.css'
import { useEffect } from "react";




export const AuthContext = createContext()

const auth = getAuth(app);


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const { theme, SetTheme } = useState("light")
    const { loading, setLoading } = useState(true)


    const createUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = (facebookProvider) => {
        return signInWithPopup(auth, facebookProvider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const toogleTheme = () => {
        SetTheme((curr) => (curr === "light" ? "dark" : "light"));
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user State change')
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => { unsubscribe() }
    }, []);

    const userInfo = { user, loading, setLoading, createUSer, verifyEmail, updateUserProfile, signIn, logOut, toogleTheme, theme, googleLogin, facebookLogin }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
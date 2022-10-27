import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
        return signInWithPopup(auth,facebookProvider)
    }
   
    const logout = () => {
        return signOut(auth)
    }

    const toogleTheme = () => {
        SetTheme((curr) => (curr === "light" ? "dark" : "light"));
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('current user State change')
            setUser(currentuser)
            setLoading(false)
    
         });return ()=>unSubscribe()
        
    }, [])

    const userInfo = { user, setUser, createUSer, signIn, logout, toogleTheme, theme,googleLogin , facebookLogin}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
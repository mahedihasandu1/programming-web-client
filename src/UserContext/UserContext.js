import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../FirebaseConfig/firebseConfig";




export const AuthContext = createContext()

const auth = getAuth(app);


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)


    const createUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }
  


    const userInfo = { user, setUser, createUSer, signIn, logout }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
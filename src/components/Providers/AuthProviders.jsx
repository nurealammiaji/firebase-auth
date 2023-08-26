import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpHandler = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInHandler = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutHandler = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        signUpHandler,
        signInHandler,
        signOutHandler,
        loading,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User signed in ...", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    } ,[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase";
export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const signUp = async ({ email, password }) => {
        setIsLoading(true)
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (res) {
            email = "";
            password = "";
        setIsLoading(false)

        }
    }
    const signIn = async ({ email, password }) => {
        setIsLoading(true)
        const res = await signInWithEmailAndPassword(auth, email, password)
        if (res) {
            email = "";
            password = "";
            localStorage.setItem("token",res.user.accessToken)
        setIsLoading(false)
        setToken(res.user.accessToken)
        }
    }

    const signout=async()=>{
        await signOut(auth);
        setToken("")
        localStorage.removeItem("token");

    }
    return (
        <GlobalContext.Provider value={{ token,signIn ,signUp, isLoading , signout}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Auth } from "../utils/firebase";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)




    useEffect(() => {

        const Subscribe = onAuthStateChanged(Auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })


        return () => Subscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ loading, user }}>
            {children}
        </AuthContext.Provider>
    )
}
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe()

    },[])

    return (
        <AuthContext.Provider value={{loading,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext
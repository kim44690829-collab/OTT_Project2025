import { createContext } from "react";
import { useState } from "react";

export const OTTContext = createContext()

export default function OTTPeovider({chidren}){
    // 로그인 유저
    const [user, setUser] = useState(null)

    const login = (username) => {
        setUser(username)
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <>
        <OTTContext.Provider value={{user, login, logout}}>
            {chidren}
        </OTTContext.Provider>
        </>
    )
}
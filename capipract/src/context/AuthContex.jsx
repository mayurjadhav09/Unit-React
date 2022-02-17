import { createContext, useState } from "react";


export const AuthContextProvider =createContext()


export const AuthContex =({children})=>{

    const [autho,setAutho]=useState(false)
    const [token,setToken]=useState(0)


    const changeAutho=(v)=>{
        setAutho(v)
    }

    const changeToken=(v)=>{
        setToken(v)
    }

return<AuthContextProvider.Provider value={{autho,token,changeAutho,changeToken}} >{children}</AuthContextProvider.Provider>

}
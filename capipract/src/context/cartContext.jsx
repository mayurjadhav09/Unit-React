import { Children, createContext, useState } from "react";



export const CartContext=createContext() 

export const CartContextProvider=({children})=>{

    const [cart,setCart]=useState(0)

    const changeCart=(x)=>{
        setCart(cart+x)

    }

    return<CartContext.Provider value={{cart,changeCart}}>{children}</CartContext.Provider>
}
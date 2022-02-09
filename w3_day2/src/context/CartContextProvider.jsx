
import { createContext, useState } from "react";


export const CartContext=createContext();

export const CartContextProvider=({childern})=>{
    const [cart,setCart]=useState(0)
    const handleCart=(v)=>{
        setCart(cart+v)
    }
    
    
    return <CartContext.Provider value={{cart,handleCart}}>{childern}</CartContext.Provider>
}
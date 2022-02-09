import { useContext } from "react"

import { CartContext } from "../../context/CartContextProvider";



export const Cart=()=>{
    const value= useContext(CartContext);
    return(
        <div>Cart: {Cart}</div>
    )
}
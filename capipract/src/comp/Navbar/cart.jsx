
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
export const Cart=()=>{
    const {cart}=useContext(CartContext)

    return <div>
            <h1>Cart:- {cart}</h1>
        </div>
    
}
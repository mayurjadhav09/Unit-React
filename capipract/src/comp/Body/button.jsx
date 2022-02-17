

import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

export const Button=()=>{
    var {changeCart}=useContext(CartContext)

    return <div>
         <button onClick={()=>{
            changeCart(1)

         }}>Add to cart</button>
        </div>
    
}
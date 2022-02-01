import { useState } from "react"

export const Grocyinput=({handleClick})=>{
    const [text,setText]=useState("")

    return(
        <div>
            <input type="text" name="" id="" placeholder="Enter items here" onChange={(a)=>{
                setText(a.target.value)
            }} />
            <button onClick={()=>{
                handleClick(text)
            }}>Add Items</button>
        </div>
    )
}
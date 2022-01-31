import { useState } from "react"



export const Counter=()=>{

    const [counter,setCounter]=useState(0)

    
    let countChange=(val)=>{
        setCounter(counter + val)

    }
    let doubleChange=(val)=>{
        setCounter(counter*val)
        // setCounter(counter/val)
    }

    if(counter>=200){
        return(
            <h1>You have Reached the Max value</h1>
            
        )
    }
    if(counter<0){
        return (
            <h1>Your Are exceding the minimium value</h1>
        )
    }

    return(
        <div>
            <h1>Counter </h1>
            <div id="display"> <h1>{counter}</h1></div>

            <button onClick={()=>countChange(1)}>Increment 1</button> 
            <button onClick={()=>countChange(-1)}>Decrement 1</button>
            <button onClick={()=>doubleChange(2)}>Double The Value</button>
            <button onClick={()=>doubleChange(3)}>Tripple The Value</button>
        </div>
    )




}
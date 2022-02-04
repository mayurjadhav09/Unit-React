import { useEffect, useState } from "react"

export const Counter=()=>{

    const [count, setCounter]=useState(0)
    var [count2,setCounter2]=useState(0)
    var c1=1
   
    let changeCount=()=>{
        // if(count>=10){
        //     count2=0
        //  }
       
        setCounter(count+c1)
      
       
    }
    if(count>9){
        count2=0
        
  
    }

  
    useEffect(()=>{
        // console.log(1)
         
       
       
        
            setCounter2(count2+count)
            console.log(count2)
    
    // ch =document.title=`${count+1}`
        
    },[count])
    





    return(
        <div>
            <h1>Counter By 1:{count}</h1>
            <h1>Counter By 2: {count2}</h1>
            <button onClick={()=>changeCount()}>Click to add</button>
        </div>
    )
}

 




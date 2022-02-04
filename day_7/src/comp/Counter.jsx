import { useState ,useRef,useEffect} from "react"
export const Counter=()=>{
    const [count, setCount] = useState(0)
    let curr=useRef()
    useEffect(()=>{
      curr.current=setInterval(()=>{
        setCount((a)=>a+1)
      },500)
    },[])
  
    const start=()=>{
      
      curr.current=setInterval(()=>{
        setCount((a)=>a+1)
      },500)
    }

    return (
        <div>
              <h1>Counter:{count}</h1>
        <button onClick={()=>{
         start()
        }}>Start</button>
  
  
          <button onClick={()=>{
            clearInterval(curr.current)
            
          }}>Pause</button>
          <button
          onClick={()=>{
            setCount(0)
            clearInterval(curr.current)
            
  
          }}>Reset</button>    
        </div>
       

    )
}
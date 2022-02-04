import { useEffect, useState } from "react/cjs/react.development"


export const Users=()=>{
    const[user,setUser]=useState()


    useEffect(()=>{

        fetch("http://localhost:3001/users")
        .then((d)=>d.json()).then((res)=>{
            console.log(res)
            setUser(res)

        });
       
        },[]);











    return(
        <div>
            {/* <input type="text" placeholder="Enter User details here" /> */}

            {/* <button>Add the user</button> */}

            <div>{user.map((e)=> <div>
               {e.name} 
               {e.id}
            </div>)}</div>
        </div>
    )
}
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./userdetail.css"

export const UserDetails=()=>{
    const {userid}=useParams()
    const [detail,setDetails]=useState("")


    // const getdata=()=>{
    //     fetch(`https://reqres.in/api/users/2`)
    //     .then(res=>{
    //         res.json()
    //     })
    //     .then(({data})=>{
    //         console.log(data)
    //         setDetails(data)
           
    //     })
      

    // }

   const getData=async(userid)=>{
       const res= await fetch(`https://reqres.in/api/users/${userid}`)
       const data=await res.json()
       console.log(data.data)
       setDetails(data.data)
   } 
   


    useEffect(()=>{
        
        getData(userid)
        // console.log({data.first_name})
    },[userid])
    // console.log(userid)


    return (
        <div id="det">
           <h1> Name:- {detail.first_name} {detail.last_name}</h1>
           <h4>{detail.email}</h4>
           <img src={detail.avatar} alt="" />
     
        </div>
    )
}
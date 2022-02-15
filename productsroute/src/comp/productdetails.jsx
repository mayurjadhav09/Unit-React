import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"



export const ProductDetails=()=>{
    const {id}=useParams()
    const [detail,setDetails]=useState("")

    const getData=async(id)=>{
        const res= await fetch(`http://localhost:3001/products/${id}`)
        const data=await res.json()
        console.log(data)
        setDetails(data)
    } 
    useEffect(()=>{
        
        getData(id)
        // console.log({data.first_name})
    },[id])


    return <div className="total">

       <h1>{detail.title}</h1> 
       <div><img className="img2" src={detail.image} alt="" /></div>
       <h5>Price:- $ {detail.price}</h5>
       <h4>Description:-{detail.description}</h4>
       
       
       

       

    </div>
}
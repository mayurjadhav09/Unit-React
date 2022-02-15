
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export const Products=()=>{
    const [product,setProducts]=useState([])
    const [page,setPage]=useState(1)

    const prod= async()=>{
        let req= await fetch( `http://localhost:3001/products?_page=${page}&_limit=5`)

        let res= await req.json()

        // console.log(res.length)

        //  count= res.length
         console.log(res)
         setProducts(res)

    }

  


    useEffect(()=>{
        prod(page)
        if(page<1){
            alert("Reached to start")
        }
        else if(page>4){
            alert("Reached to End")
        }
        
    },[page])



    return (
        <div className="total">
            <h1>Products Page</h1>
            <div>
            {product.map((e,i)=>{

                return <div>
                    <h3 key={i}>{e.id}  :- <Link className="link" to={`/products/${e.id}`}>{e.title}</Link> </h3>
                </div>
            })}

            <button onClick={()=>{
                setPage(page - 1)
                console.log(page)
            }}>Prev</button>
             <button onClick={()=>{
                setPage(page+1)
                console.log(page)
            }}>Next</button>
            
            </div>      
        </div>
    )
   
}
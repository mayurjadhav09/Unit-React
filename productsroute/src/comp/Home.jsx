import { useEffect, useState } from "react"




export const Home=()=>{
    // let count=0

    const [catago,setcatago]=useState([])

    const catag= async()=>{
        let req= await fetch(" http://localhost:3001/category")

        let res= await req.json()

        // console.log(res.length)

        //  count= res.length
         console.log(res)
        setcatago(res)

    }



    useEffect(()=>{
        catag()
        
    },[])

    let arr=[]


    return <div>
        

      

        <div>
        <img className="img1" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="" />
        <img className="img1" src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />

    <img className="img1" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" />
    <img className="img1" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
            <div className="total">
                <h1>Category</h1>
                {catago.map((e,i)=>{
                  
                   return <div>
                        <p key={i}>{e.cat}:-5</p>
                      
                   </div>
               
                   
                   
                })}
                  <h1>Total Products available:- {20}</h1>
                 
                 
               
            </div>
           
          
        </div>
       
       
    </div>
}
import { useContext, useState } from "react"
import { AuthContextProvider } from "../../context/AuthContex"


export const Login=()=>{
    const [data,setdata]=useState({})
    const {changeAutho,changeToken}=useContext(AuthContextProvider)


    const getData=(v)=>{
        changeAutho(true)
        changeToken(v)
    }


    const fetcData=()=>{
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        }).then(d=>d.json()).then((v) => 
             getData(v)
            )

    }


    const submitData=(el)=>{
        const {name}=el.target;
       setdata({...data,[name]:el.target.value})
    }

  


    return(
        <div className="form">
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log(data)
                fetcData()
              
            }}>



            <input type="email" name="email" placeholder="Enter email address" onChange={submitData} />
            <input type="password" name="password" placeholder="Enter Password" onChange={submitData} />
            <input className="sub" type="submit" value="Submit" />

            </form>
        </div>
    )
}
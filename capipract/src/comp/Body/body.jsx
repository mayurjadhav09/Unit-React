
import { useContext } from "react"
import { AuthContextProvider } from "../../context/AuthContex"

export const Body=()=>{
    const {token} =useContext(AuthContextProvider)


    return <div>
            {/* <h1>Body</h1> */}
            <h1>Login Status: Succesfull </h1>
           <h1>Token: {token.token}</h1>

        </div>
    
}
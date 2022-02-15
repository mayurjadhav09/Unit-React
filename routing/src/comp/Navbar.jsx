import { Link } from "react-router-dom"
import "./Navbar.css"
export const Navbar=()=>{


    return (
        <div className="nav">
       <Link className="link" to="/">Home</Link>
       <Link  className="link" to="/about">About</Link>
       <Link  className="link" to="/skills">Skills</Link>
       <Link  className="link" to="/project">Projects</Link>
       <Link  className="link" to="/users">User</Link>
       </div>
    )
}
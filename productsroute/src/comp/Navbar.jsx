import { Link } from "react-router-dom"

import "./nav.css"

export const Navbar=()=>{


    return(

        <div id="nav">
            <Link className="nav" to="/">Home</Link>
            <img src="https://image.shutterstock.com/image-vector/shopping-bag-vector-icon-260nw-1174966747.jpg" alt="" />
            <Link className="nav" to="/product">Products</Link>
            {/* <Link to="/productdetails/:id"></Link> */}
        </div>
    )
}
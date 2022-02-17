// import { Cart } from "./cart"

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider, AuthContex } from "../../context/AuthContex";
import { Body } from ".././Body/body";
export const Navbar = () => {
  const { autho, changeAutho } = useContext(AuthContextProvider);
  return (
    <div className="nav">
      <a className="link" to="#Home">
        Home
      </a>
      {/* <Link to="/">Home</Link> */}

      {/* { autho ? (
        <Link path="/body"  onClick={() => changeAutho(false)}>
          Logout
        </Link>)
       : 
       (<Link  to=>
          
        </Link>)
      } */}
      {/* <Link to="#login" ></Link>  */}

      {autho ? (
        <a className="link" onClick={() => changeAutho(false)}>
          Logout
        </a>
      ) : (
        <a className="link" to="#login"></a>
      )}
    </div>
  );
};

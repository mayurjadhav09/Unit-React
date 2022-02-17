
import './App.css';
import { Body } from './comp/Body/body';
import { Navbar } from './comp/Navbar/navbar';
import {Home} from "./comp/Navbar/Home"
import {Routes,Route} from "react-router-dom"

import {AuthContextProvider} from "./context/AuthContex"
import { useContext } from 'react';
import {Cart} from "./comp/Navbar/cart"
import{Button} from "./comp/Body/button"
// import { Body } from './comp/Body/body';
import { Login } from './comp/Navbar/login';
function App() {
const {autho} =useContext(AuthContextProvider)

  return (
    <div className="App">
    
       {/* <Navbar/> */}
       <Navbar/>
       <Home/>
       {/* <Routes> */}
         {/* <Route path='/' element={<Home/>}></Route> */}

{/*         
        
          {
         autho?  <Route element={<Body/>}></Route>  : <Route  element={<Login/>}></Route>
       } */}
    

       {
         autho? <Body/>:<Login/>
       }
       {/* <Cart/>
       <Button/> */}
           {/* </Routes>  */}
    </div>
  );
}

export default App;

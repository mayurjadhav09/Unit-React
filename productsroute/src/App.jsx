// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './comp/Navbar';
import{Home} from "./comp/Home"
import { Products } from './comp/product';
import { ProductDetails } from './comp/productdetails';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductDetails/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

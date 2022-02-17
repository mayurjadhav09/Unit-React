import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContex} from "./context/AuthContex"
import {CartContextProvider} from "./context/cartContext"
// import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
<CartContextProvider>
    <AuthContex>

    <App />

    </AuthContex>

    {/* </BrowserRouter> */}
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

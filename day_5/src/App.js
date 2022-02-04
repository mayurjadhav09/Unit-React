import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {Counter} from "./comp/Counter"
import {Users} from "./comp/user"

function App() {

  
  return (
    <div className="App">

 <Counter/>
 <Users/>
    
    </div>
  );
}

export default App;

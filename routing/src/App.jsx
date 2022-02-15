// import logo from './logo.svg';
import './App.css';
import { Home } from './comp/home';
import {Navbar} from "./comp/Navbar"
import {Routes,Route} from "react-router-dom"
import { About } from './comp/about';
import { Skills } from './comp/skills';
import { Projects } from './comp/project';
import { User } from './comp/User';
import{UserDetails} from "./comp/UserDetails"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/users' element={<User/>}></Route>
        <Route path='/users/:userid' element={<UserDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

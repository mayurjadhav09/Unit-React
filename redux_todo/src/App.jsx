
import './App.css';
import {Todos} from "./comp/Todo"
import {Routes,Route} from "react-router-dom"
import{TodoDetails } from "./comp/TodoDetails"

function App() {
  return (
    <div className="App">
      <Todos/>
      <Routes>
        {/* <Route path="/todo/id" element={<TodoDetails/>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;

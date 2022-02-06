//import { Todo } from "./components/Todo";
import "./App.css";
import { Todo } from "./component/todos";

function App() {
  return (
  
    <div className="App">
      {/* <h1 className="title">Todo...</h1>
        <input className="inputTitle" type="text" />
        <input className="inputBody"  type="text" placeholder="Add Task..." />
        <button className="addBtn">Add</button>
        <div className="container"> </div>
        <button className="prev">Prev</button> */}
<Todo/>
      </div>
 
  );
}

export default App;

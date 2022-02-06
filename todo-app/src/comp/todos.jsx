import { useEffect, useState } from "react";
import "./todos.css"
export const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1);


  useEffect(() => {
    getData();
  }, [page]);



  const getData = () => {
    setLoading(true);
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((data) => data.json())
      .then((response) => {
        setTodo(response);
        setLoading(false);
      });
  };

  const delTodo=(id,event)=>{
    fetch(`http://localhost:3001/todos/${id}`,{
        method:"delete"
    })
    .then((res)=>res.json()).then((res)=>{
        getData()
    })
    .catch((err)=>
        console.log(err.message)
        )


  }

  return loading ? (
    "Fetching Data.........."
  ) : (
    <div className="">
      <input placeholder="Add task" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          const data = { status: false, title: text };
          fetch(" http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          }).then(getData);
        }}
      >
        Add Todo
      </button>

      {todos.map(e => 
        <div key={e.id} className="text1">
          
         <h1>{e.title} - {e.status ? "Done" : "Not Done"}</h1> 
         <button onClick={()=>delTodo(e.id,e)}
         > Delete

         </button>
        </div>
      )}
       
        <button onClick={()=>{
            setPage(page-1)
        }}>Prev</button>


     <button onClick={()=>{
       setPage(page+1)
        }}>Next</button>
    </div>
  );


};

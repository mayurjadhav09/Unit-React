import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { statusCompleted}from "../redux/action"
export const Todos = () => {
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const subData = (el) => {
    const { name } = el.target;
    setData({ ...data, [name]: el.target.value, status: false });
  };

  const fetchData = () => {
    fetch("http://localhost:3001/User", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(getData);
  };

  const getData = () => {
    fetch("http://localhost:3001/User",{
        method:"GET"
    })
      .then((req) => req.json())
      .then((res) => {
        console.log(res)  
        setDatas(res)});
  };

  const deleTodo=(id,event)=>{
      fetch(`http://localhost:3001/User/${id}`,{
          method:"delete"
      })
      .then((res)=>res.json()).then((res)=>getData())
  }

  const toggleStatus = (id, val) => {
    fetch(`http://localhost:3001/User/${id}`, {
        status: val,
      })
      .then(() => {
        dispatch(statusCompleted(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h1>todos</h1>
        <form
          onSubmit={() => {
            console.log(data);

            fetchData();
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter the todos here"
            onChange={subData}
          />
            <input
            type="text"
            name="discription"
            placeholder="Enter the Discription"
            onChange={subData}
          />
          {/* <input type="submit" value="Add Todo" /> */}
          <button>Add todo</button>
        </form>
      </div>

      <div className="List">
        <table>
          <thead>
            <tr>
            <th>#</th>
              <th>Title</th>
              {/* <th>Status</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
        {datas.map((e,i)=>{

        return(
        <tr key={i}>
            <th> {e.id}</th>
            <th><Link to={`/todo/${e.id}`}></Link>{e.title}</th>
            <th>
            {e.status ? (
                        <button
                        
                          onClick={() => {
                            toggleStatus(e.id, false);
                          }}
                        >
                          Done
                        </button>
                      ) : (
                        <button
                          
                          onClick={() => {
                            toggleStatus(e.id, true);
                          }}
                        >
                          Not Done
                        </button>
                      )}
            </th>
            
            <th><button onClick={()=>deleTodo(e.id)}>Delete</button></th>
            
        </tr>
        )
            })} 

        </tbody>
        </table>
      
          
       

      </div>
    </div>
  );
};

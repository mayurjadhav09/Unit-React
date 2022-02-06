import { useEffect, useState } from "react";
import "./todos.css";
export const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    // setLoading(true);
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((data) => data.json())
      .then((response) => {
        setTodo(response);
        // setLoading(false);
      });
  };

  const delTodo = (id, event) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h1 className="title">Todo...</h1>
      <div className="display">
        <input
          placeholder="Add Title..."
          className="inputTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Add Task..."
          className="inputBody"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="addBtn"
          onClick={() => {
            const data = { status: false, title: { title, text } };
            fetch(" http://localhost:3001/todos", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "content-type": "application/json",
              },
            }).then(getData);
          }}
        >
          Add
        </button>
      </div>
      <div className="to">
        {todos.map((e) => (
          <div key={e.id}>
            <table>
              <tr>
                <th>{e.title.title}</th>
                <th>{e.title.text} </th>
                <th>
                  {" "}
                  <button className="prev" onClick={() => delTodo(e.id, e)}>
                    {" "}
                    Delete
                  </button>
                </th>
              </tr>
            </table>

            {/* - {e.status ? "Done" : "Not Done"} */}
          </div>
        ))}
        <div className="twobtn">
          <button
            className="prev"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>

          <button
            className="prev1"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

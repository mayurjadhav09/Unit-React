import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((req) => req.json())
      .then(({ data }) => setUser(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((e, i) => {
        return (
          <h4 key={i}>
            User:- {e.id}- <Link to={`/users/${e.id}`}> {e.first_name}</Link>{" "}
          </h4>
        );
      })}
    </div>
  );
};

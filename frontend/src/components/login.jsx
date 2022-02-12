import React, { useEffect, useState } from "react";
import {Stack} from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";
import axiox from "axios"
const is_logged_in = false;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitlogin = async () => {
    const newUser = {
      email: email,
      pass: password,
    };
  const request0ptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newUser),
}
    const response = await fetch("/login", request0ptions);
    const data =await response.json();
    console.log(data);
    if(data == false){
      console.log(data);
    }
    else{
       navigate("/account");
       is_logged_in= true;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitlogin();
    alert(`The name you entered was: ${email} and the pass : ${password}`);
  };

  return (
    <div
      className="input-group input-group-sm mb-3"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        alignContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;



// const [todos, setTodos] = useState([]);
// const fetchTodos = async () => {
//   const response = await axiox.get("/login");
//   const todos = response.data;
//   setTodos(todos);

//   console.log(todos.data);
// };
// useEffect(() => {
//   fetchTodos();
// }, []);
// return (
//   <div>
//     <div>
//       <ul>
//         {todos.data.map((todo, index) => (
//           <li key={index}>{todo.email}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );
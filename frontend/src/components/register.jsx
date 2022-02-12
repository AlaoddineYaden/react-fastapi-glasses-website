import React, { useEffect, useState } from "react";
import {Stack} from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";
import axiox from "axios"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitRegister = async () => {
    const newUser = {
      name: name,
      email: email,
      pass: password,
    };
  const request0ptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newUser),
}
    const response = await fetch("/register", request0ptions);
    const data =await response.json();
    console.log(data);
    if(data != null){
      console.log(data);
    }
    else{
       navigate("/account");
       console.log(data);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitRegister();
    alert(`The name you entered was: ${email} and the pass : ${password} and your name : ${name}`);
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
          <label htmlFor="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            className="form-control"
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

export default Register;



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
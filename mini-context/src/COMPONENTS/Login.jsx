import React from "react";
import { useContext } from "react";
import { useState } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      {""}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}

export default Login;

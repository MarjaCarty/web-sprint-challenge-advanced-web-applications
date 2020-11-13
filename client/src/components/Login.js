import React, { useState } from "react";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to the Bubble App!</h1>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

import React, { useState } from "react";

const initialCredentials = {
  username: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <form>
      <h1>Welcome to the Bubble App!</h1>
      <input
        type="text"
        name="username"
        value={credentials.username}
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

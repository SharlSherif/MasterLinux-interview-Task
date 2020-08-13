import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.log(username, password);
  console.log(props);

  const signIn = async (e) => {
    e.preventDefault();

    const response = await fetch(process.env.REACT_APP_API + "/user/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
    });

    const responseBody = await response.json();
    if (!responseBody.success) {
      console.log("invalid credentials");
    } else {
      sessionStorage.setItem("token", responseBody.data.accessToken);
      sessionStorage.setItem("user", JSON.stringify(responseBody.data.user));
      if (responseBody.data.user.type == "examiner") {
        props.history.push("dashboard");
      } else {
        props.history.push("examList");
      }
    }
  };
  return (
    <div>
      <h1>Welcome to our quiz! please use your credentials to sign in</h1>
      <form onSubmit={signIn}>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

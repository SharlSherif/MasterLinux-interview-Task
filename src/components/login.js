import React, { useState } from "react";
import "../login.css";
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
        props.history.push("examiner");
      } else {
        props.history.push("examlist");
      }
    }
  };
  return (
    <div class="wrapper">
      <form class="col-8" onSubmit={signIn}>
        <h1>
          Welcome to Quizz! <br />
          please use your credentials to sign in
        </h1>
        <div class="mb-3">
          <label for="validationDefault01">Username</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            placeholder="eg. Sharl"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="validationDefault02">Password</label>
          <input
            type="password"
            class="form-control"
            id="validationDefault02"
            placeholder="eg. 123123"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button class="btn btn-primary" type="submit" id="submitButton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

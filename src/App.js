import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import ExamsList from "./components/listExams";
import Exam from "./components/exam";
require("dotenv").config();

const PublicRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? ( // not undefined
          <Component {...props} />
        ) : (
          <Redirect to="/candidate" />
        )
      }
    />
  );
};

console.log(process.env);
function App(props) {
  let token = sessionStorage.getItem("token");
  let user = sessionStorage.getItem("user");

  if (!token && !window.location.pathname.includes("/login")) {
    window.location = "login";
  }
  // if (
  //   !!token &&
  //   user.type === "candidate" &&
  //   window.location.pathname.includes("/dashboard")
  // ) {
  //   window.location = "/examlist";
  // } else if (
  //   !!token &&
  //   user.type === "examiner" &&
  //   !window.location.pathname.includes("/examiner")
  // ) {
  //   window.location = "/examiner";
  // }

  return (
    <BrowserRouter>
      <Switch>
        {/* admin dashboard route */}
        <PublicRoute path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={() => "Hello Examiner!"} />
        <Route path="/exam" exact component={Exam} />
        <Route path="/examlist" exact component={ExamsList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

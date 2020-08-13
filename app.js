const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//? make enviroment variables accessible
require("dotenv").config();
//* establish db connection
require("./database");
//? routes
const QuestionsRoute = require("./routes/questions.route");
const UserRoute = require("./routes/user.route");
const ExamRoute = require("./routes/exam.route");

// body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// allowing CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "*"
    // 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );

  res.setHeader("Access-Control-Expose-Headers", "Authorizataion");
  next();
});

app.use("/api/questions", QuestionsRoute);
app.use("/api/exam", ExamRoute);
app.use("/api/user", UserRoute);

app.listen(4000, () => console.log("App up on 4000.."));

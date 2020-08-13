import React, { useState, useEffect } from "react";

function ExaminerPage(props) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.user));

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button class="btn btn-primary" type="submit" id="submitButton">
        View Grades
      </button>
      <button class="btn btn-primary ml-3 mr-3" type="submit" id="submitButton" onClick={()=>window.location="/examiner/addquestion"}>
        Add Question
      </button>
      <button class="btn btn-primary" type="submit" id="submitButton" onClick={()=>window.location="/examiner/addexam"}>
        Create Exam
      </button>
    </div>
  );
}

export default ExaminerPage;

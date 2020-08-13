import React, { useState, useEffect } from "react";
import "../listexams.css";
function ExamsList(props) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch(process.env.REACT_APP_API + "/exam/", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.token,
        },
      });

      const responseBody = await response.json();
      console.log(responseBody);
      setExams(responseBody.data);
    };

    fetchExams();
  }, []);

  return (
    <div>
      <div class="header mb-2">
        <h1>Available Exams!</h1>
        <small>Click on any to enroll</small>
      </div>

      <ul class="exams">
        {exams.map((exam) => (
          <li class="mb-2">
            <span onClick={() => props.history.push(`/exam/?${exam._id}`)}>
              {exam.title}
            </span>
            {/* <button class="btn btn-primary ml-3" onClick={() => props.history.push(`/exam/?${exam._id}`)}>
              Enroll
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamsList;

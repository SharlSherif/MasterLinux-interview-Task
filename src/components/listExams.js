import React, { useState, useEffect } from "react";

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
      <h1>Available Exams!</h1>
      <ul>
        {exams.map((exam) => (
          <li>
            <span>{exam.title}</span>
            <button onClick={() => props.history.push(`/exam/?${exam._id}`)}>
              Enroll
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamsList;

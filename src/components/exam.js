import React, { useState, useEffect } from "react";

function Exam(props) {
  const [exam, setExam] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setSubmission] = useState("");
  const [overallScore, setOverallscore] = useState(0);
  const [results, setResults] = useState({
    examID: "",
    answers: [],
  });

  useEffect(() => {
    const examID = window.location.search.replace("?", "");

    const fetchExam = async () => {
      const response = await fetch(
        process.env.REACT_APP_API + "/exam/" + examID,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.token,
          },
        }
      );

      const responseBody = await response.json();
      console.log(responseBody);
      setResults({ ...results, examID: responseBody.data._id });
      setExam(responseBody.data);
    };

    fetchExam();
  }, []);

  const submitResults = async () => {
    setSubmission(true);
    const response = await fetch(
      process.env.REACT_APP_API + "/user/takeexam/",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.token,
        },
        body: JSON.stringify({ examID: exam._id, ...results }),
      }
    );

    const responseBody = await response.json();
    console.log(responseBody);
    if (responseBody.success) {
      setOverallscore(responseBody.data);
    } else {
      setErrorMessage("Something went wrong " + responseBody.message);
    }
  };

  const onChoice = async (questionID, answerID) => {
    if (
      results.answers.find((answer) => answer.questionID == questionID) ==
      undefined
    ) {
      results.answers.push({ questionID, answerID });
      setResults(results);
    } else {
      let newAnswers = [];

      for (let answer of results.answers) {
        if (answer.questionID == questionID) {
          console.log(questionID, answerID);
          newAnswers.push({ questionID, answerID });
        } else {
          newAnswers.push(answer);
        }
      }
      results.answers = newAnswers;

      setResults(results);
    }
    console.table(results);
  };

  return (
    <div>
      <h1>Exam</h1>
      <h2>{exam.title}</h2>
      {overallScore ? <p>Overall Score is {overallScore}</p> : ""}
      <ul>
        {exam?.questions?.map((question, i) => (
          <>
            <li key={i}>{question.text}</li>
            <ul>
              {question.answers.map((answer, i) => (
                <div>
                  <input
                    type="radio"
                    name={question.text}
                    onClick={() => onChoice(question._id, answer._id)}
                  />
                  <span key={i}>{answer.text}</span>
                </div>
              ))}
            </ul>
          </>
        ))}
      </ul>
      <button onClick={submitResults} disabled={isSubmitted}>
        Submit
      </button>
    </div>
  );
}

export default Exam;

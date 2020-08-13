import React, { useState, useEffect } from "react";
import "../exam.css";
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

  if (overallScore)
    return (
      <div class="header mb-2">
        <h1 class="after-submission">
          Overall score is <span class="overall-score">40</span>
        </h1>

        <hr />
        <button
          class="btn btn-primary"
          onClick={() => (window.location = "/examlist")}
        >
          View Exams
        </button>
      </div>
    );

  return (
    <div>
      <div class="header mb-2">
        <h1>{exam.title}</h1>
        <hr />
      </div>

      <ul>
        {exam?.questions?.map((question, i) => (
          <>
            <li class="question-text" key={i}>
              {question.text}
            </li>
            <ul class="answers">
              {question.answers.map((answer, i) => (
                <div>
                  <input
                    type="radio"
                    name={question.text}
                    onClick={() => onChoice(question._id, answer._id)}
                  />
                  <span class="answer-text" key={i}>
                    {answer.text}
                  </span>
                </div>
              ))}
            </ul>
          </>
        ))}
      </ul>
      <button
        class="btn btn-primary"
        onClick={submitResults}
        disabled={isSubmitted}
      >
        Submit
      </button>
    </div>
  );
}

export default Exam;

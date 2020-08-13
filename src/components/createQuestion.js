import React, { useState, useEffect } from "react";

function CreateQuestion(props) {
  const [text, setText] = useState("");
  const [answers, setAnswers] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_API + "/questions/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.token,
      },
      body: JSON.stringify({ text, answers }),
    });

    const responseBody = await response.json();
    console.log(responseBody);
  };

  const answerChange = async (value, n) => {
    answers[n] = { ...answers[n], text: value };
    console.table(answers);
    setAnswers(answers);
  };

  const onChoice = async (n) => {
    answers[n] = { ...answers[n], isCorrectAnswer: true };

    // make all the other answers isCorrectAnswer false since there is always only one correct answer
    for (let answer of answers) {
      let index = answers.indexOf(answer);
      if (index !== n && index !== -1) {
        answers[index] = { ...answers[index], isCorrectAnswer: false };
      }
    }
    console.table(answers);
    setAnswers(answers);
  };
  return (
    <div>
      <h1>Add a new question!</h1>
      <form onSubmit={submit}>
        <input placeholder="title" onChange={(e) => setText(e.target.value)} />
        <h2>Answers</h2>
        {[1, 2, 3, 4].map((n) => (
          <div>
            <input
              type="radio"
              name="correctAnswer"
              onClick={() => onChoice(n)}
            />{" "}
            <input
              placeholder={`answer${n}`}
              onChange={(e) => answerChange(e.target.value, n)}
            />
          </div>
        ))}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateQuestion;

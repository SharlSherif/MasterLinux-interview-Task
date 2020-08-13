import React, { useState, useEffect } from "react";
import "../createquestion.css";
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
    if(responseBody.success){
      window.location="/examlist"
    }
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
      <form onSubmit={submit} class="col-8">
        <h1 style={{ textAlign: "center" }}>Add a new question!</h1>

        <input
          class="form-control"
          placeholder="title"
          onChange={(e) => setText(e.target.value)}
        />
        <small>Answers</small>
        {[1, 2, 3, 4].map((n) => (
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="radio"
                  aria-label={n}
                  name="isCorrectAnswer"
                  onClick={() => onChoice(n)}
                />
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder={`Answer ${n}`}
              aria-label={n}
              onChange={(e) => answerChange(e.target.value, n)}
            />
          </div>
        ))}
        <button class="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateQuestion;

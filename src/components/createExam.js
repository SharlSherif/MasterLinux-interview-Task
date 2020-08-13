import React, { useState, useEffect } from "react";
import "../createquestion.css"
;
function CreateExam(props) {
  const [text, setText] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_API + "/exam/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.token,
      },
      body: JSON.stringify({ title:text }),
    });

    const responseBody = await response.json();
    console.log(responseBody);
    if(responseBody.success){
      window.location="/examlist"
    }
  };

  return (
    <div>
      <form onSubmit={submit} class="col-8">
        <h1 style={{ textAlign: "center" }}>Create a new exam!</h1>

        <input
          class="form-control"
          placeholder="title"
          onChange={(e) => setText(e.target.value)}
        />
       <span>We'll add 10 random questions to it picked from the ones you added previously</span>
        <button class="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateExam;

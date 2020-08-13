import React from "react";

function Navbar() {
  return (
    <div class="navbar mb-5">
      <div class="logo">
        <h1 class="mb-0">Quizz</h1>
      </div>

      <div class="links">
        <a class="active-link" href="/examlist">Exams</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Navbar;

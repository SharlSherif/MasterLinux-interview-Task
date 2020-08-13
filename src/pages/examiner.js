import React, { useState, useEffect } from "react";

function ExaminerPage(props) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.user));

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
    
    </div>
  );
}

export default ExaminerPage;

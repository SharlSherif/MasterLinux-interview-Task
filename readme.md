# Description
A REST API built with Nodejs that serves an online MCQ exam with Reactjs for the frontend

# Features
Bearer / Token authentication.
- Two types of users to login:
    - Examiners with the ability to add new questions to the quiz bank.
    - Normal users who can enroll in exams and answer the questions.
- Once you enroll in an exam, the questions begin to appear one by one in a random order.
- Two degrees as a score for the correct answered question and zero for incorrect ones.
- Any Exam is 10 questions
- 4 choices for each MCQ question and it’s a bonus if you can render the choices in a random order each time you load that question.
    - The GUI redirects the normal users to the component that just allows them to
enroll in exams, and redirect examiners to the route that just lets them either add
new questions or just preview the enrollments scores
# Installation
- Clone the repo
- npm install
- npm start

*I'm using an online database so you don't have to set it up*

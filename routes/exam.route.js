const { Router } = require("express");
const router = Router();

const ExamController = require("../controllers/exam.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const RoleMiddleware = require("../middlewares/role.middleware");

// use this route for seeding the database with the required data based on the Product schema model
router.post(
  "/",
  AuthMiddleware,
  // ensure that only the examiner user type can add a new question
  (req, res, next) => RoleMiddleware(req, res, next, "examiner"),
  ExamController.create
);

router.get(
  "/",
  AuthMiddleware,
  // ensure that only the examiner user type can fetch Exam
  (req, res, next) => RoleMiddleware(req, res, next, "examiner"),
  ExamController.getData
);

router.get(
  "/:id",
  AuthMiddleware,
  // ensure that only the examiner user type can fetch Exam
  (req, res, next) => RoleMiddleware(req, res, next, "examiner"),
  ExamController.getExamById
);

router.get(
  "/grade/:id",
  AuthMiddleware,
  // ensure that only the examiner user type can fetch Exam
  (req, res, next) => RoleMiddleware(req, res, next, "examiner"),
  ExamController.getExamGrade
);

module.exports = router;

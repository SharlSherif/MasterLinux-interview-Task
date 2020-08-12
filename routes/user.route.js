const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/user.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const RoleMiddleware = require("../middlewares/role.middleware");

router.post("/login", UserController.login);
router.post("/signup", UserController.signup);
router.post(
  "/takeexam",
  AuthMiddleware,
  // ensure that only the candidate user type can add a new question
  (req, res, next) => RoleMiddleware(req, res, next, "candidate"),
  UserController.takeAnExam
);

module.exports = router;

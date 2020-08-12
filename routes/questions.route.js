const { Router } = require("express");
const { encode } = require("../utils/jwt");
const router = Router();

const QuestionsController = require("../controllers/questions.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");

// use this route for seeding the database with the required data based on the Product schema model
router.post("/", AuthMiddleware, QuestionsController.create);

router.get('/', (req,res)=>{
  res.status(200).send(encode({a:'abcd'}))
})
// router.get("/", QuestionsController.getData);

module.exports = router;
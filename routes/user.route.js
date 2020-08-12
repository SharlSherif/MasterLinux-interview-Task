const { Router } = require('express');
const router = Router();

const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

router.post('/login', UserController.login)
router.post('/signup', UserController.signup)

module.exports = router;

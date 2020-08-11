const { Router } = require('express');
const router = Router();

const ExamRoute = require('../controllers/product.controller');
const Middleware = require('../middlewares/product.middleware');

// use this route for seeding the database with the required data based on the Product schema model
router.post(
    '/',
    ExamRoute.seed
);

router.get('/', Middleware, ExamRoute.getData)

module.exports = router;

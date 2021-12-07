const router = require("express").Router();
const authController = require("../controllers/auth.controller");

// define routes /api/auth
router.post('/register',authController.register)
router.post('/signin',authController.signin)
router.get('/isauth',authController.isauth)

module.exports = router;
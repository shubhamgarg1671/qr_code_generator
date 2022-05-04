const router = require('express').Router();
const {
	signUp,
	login,
} = require('../constrollers/userController.js');

router.route('/signup').post(signUp);
router.route('/login').post(login);

module.exports = router;
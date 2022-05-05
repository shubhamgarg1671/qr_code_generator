const router = require('express').Router();
const {
	signUp,
	login,
	socialSignup,
	socialLogin
} = require('../constrollers/userController.js');

router.route('/signup').post(signUp);
router.route('/login').post(login);
router.route('/socialSignup').post(socialSignup);
router.route('/socialLogin').post(socialLogin);

module.exports = router;
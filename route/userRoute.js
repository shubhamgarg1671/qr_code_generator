const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const {
	signUp,
	login,
	socialSignup,
	socialLogin,
	updateUser,
	deleteUser
} = require('../constrollers/userController.js');

router.route('/signup').post(signUp);
router.route('/login').post(login);
router.route('/socialSignup').post(socialSignup);
router.route('/socialLogin').post(socialLogin);
router.route('/updateUser').patch(authenticate, updateUser);
router.route('/deleteUser').delete(authenticate, deleteUser);

module.exports = router;
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const firebaseAdmin = require('../Config/firebaseAdmin.config');
const { User } = require('../model/user.js');

module.exports.signUp = async (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    console.log(body);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
};

module.exports.login = async (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password).then((user) => {
        // res.send(user); 
        console.log("user");
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    });
};

module.exports.SocialSignup = async (req, res) => {
    var uid = _.pick(req.body, ['uid']);

	const newUser = await User.create({
		name: decoded.name,
		email: email,
		profilePic: decoded.picture,
		isGoogle: true,
		role: role,
	});

	const token = jwt.sign(
		{
			_id: newUser._id,
			role: newUser.role,
x       		},
		process.env.JWT_SECRET,
		{
			expiresIn: '30d',
		}
	);
	await Notification.create({
		for: 'admin',
		type: 'New Registration',
		message: `New ${role}, ${decoded.name} has just signed up.`,
	});

	return res.status(200).json({
		status: '200',
		message: 'User Registered Successfully',
		token: token,
		role: role,
		userID: newUser._id,
		activeSub: newUser.activeSub,
	});
};
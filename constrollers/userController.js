const _ = require('lodash');
const jwt = require('jsonwebtoken');
const firebaseAdmin = require('../Config/firebaseAdmin.config');
const { User } = require('../model/user.js');

module.exports.signUp = async (req, res) => {
    var body = req.body;
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

module.exports.socialSignup = async (req, res) => {
    // var uid = _.pick(req.body, ['uid']);
	const uid  = req.body.uid;
	const firebaseAuth = firebaseAdmin.auth();
    const firebaseUser = await firebaseAuth.verifyIdToken(uid).then((user) => {
		return user;
	}).catch((e) => {
		console.log(e);
		return e;
	});
    const email = firebaseUser.email;


    if (!email) {
		return res.json({
			status: '200',
			alert: 'Email is not found',
		});
	}

    const oldUser = await User.findOne({ email: email.toLowerCase() });

	if (oldUser) {
		return res.json({
			status: '200',
			alert: 'User already exists',
		});
	}

    const user = await User.create({
		name: firebaseUser.name,
		email: email
	});


	const token = user.generateAuthToken();

	return res.header('x-auth', token).send(user);
};

module.exports.socialLogin = async (req, res) => {
    // var uid = _.pick(req.body, ['uid']);
	const uid  = req.body.uid;
    const firebaseAuth = firebaseAdmin.auth();
    const firebaseUser = await firebaseAuth.verifyIdToken(uid).then((user) => {
		return user;
	}).catch((e) => {
		console.log(e);
		return e;
	});
    const email = firebaseUser.email;

    if (!email) {
		return res.json({
			status: '200',
			alert: 'Email is not found',
		});
	}

	const expiryDate = new Date

    const user = await User.findOne({ email: email.toLowerCase(), name: firebaseUser.name });

	const token = user.generateAuthToken();

	return res.header('x-auth', token).send(user);
};
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const firebaseAdmin = require('../Config/firebaseAdmin.config');
const { User } = require('../model/qr.js');

module.exports.signUp = async (req, res) => {
    var body = req.body;
    console.log(body);
    var qr = new User(body);
    qr.save().then(() => {
        return qr.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(qr);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
};

module.exports.login = async (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password).then((qr) => {
        // res.send(qr); 
        console.log("qr");
        return qr.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(qr);
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    });
};

module.exports.socialSignup = async (req, res) => {
    // var uid = _.pick(req.body, ['uid']);
    const uid = req.body.uid;
    const firebaseAuth = firebaseAdmin.auth();
    const firebaseUser = await firebaseAuth.verifyIdToken(uid).then((qr) => {
        return qr;
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

    const qr = await User.create({
        name: firebaseUser.name,
        email: email
    });


    const token = qr.generateAuthToken();

    return res.header('x-auth', token).send(qr);
};

module.exports.socialLogin = async (req, res) => {
    // var uid = _.pick(req.body, ['uid']);
    const uid = req.body.uid;
    const firebaseAuth = firebaseAdmin.auth();
    const firebaseUser = await firebaseAuth.verifyIdToken(uid).then((qr) => {
        return qr;
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

    const qr = await User.findOne({ email: email.toLowerCase(), name: firebaseUser.name });

    const token = qr.generateAuthToken();

    return res.header('x-auth', token).send(qr);
};

module.exports.updateUser = async (req, res) => {

    try {
        const qr = await User.findOneAndUpdate({ email: req.body.email }, req.body, { new: true });
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

module.exports.deleteUser = async (req, res) => {

    try {
        const qr = await User.findOneAndDelete({ email: req.body.email });
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};
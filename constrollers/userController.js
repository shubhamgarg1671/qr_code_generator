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


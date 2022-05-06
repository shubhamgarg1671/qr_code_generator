var {Users} = require('../model/user.js');
const jwt = require('jsonwebtoken');

const authenticate = function (req, res, next) {
    try {
    var token = req.header('x-auth');

    if (!token) {
        return res.json({
            status: '200',
            alert: 'A token is required for authentication',
        });
    }
    const decoded = jwt.verify(token, "abc123");
    req.user = decoded;
    return next();
    } catch (err) {
        console.log(err);
        return res.json({ status: '200', alert: 'Token Expires' });
    }
}

module.exports = authenticate;

const _ = require('lodash');
const jwt = require('jsonwebtoken');
const firebaseAdmin = require('../Config/firebaseAdmin.config');
const { Qr } = require('../model/qr.js');

module.exports.newQr = async (req, res) => {
    var body = req.body;
    var qr = new Qr(body);
    qr.save().then(() => {
        res.send(qr);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
};

module.exports.updateQr = async (req, res) => {
    try {
        const qr  = await Qr.findOneAndUpdate({ creator: req.body.email }, req.body, { new: true });
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

module.exports.deleteQr = async (req, res) => {
    try {
        const qr = await Qr.findOneAndDelete({ email: req.body.email });
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};
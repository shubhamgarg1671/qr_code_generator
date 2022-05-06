const _ = require('lodash');
const jwt = require('jsonwebtoken');
const firebaseAdmin = require('../Config/firebaseAdmin.config');
const Qr  = require('../model/qr');

module.exports.createQr = async (req, res) => {
    var body = req.body;
    console.log(body);
    const user = req.user;
    const qr = new Qr(body);
    if (!qr.creator)
        qr.creator = user.id;
    console.log(qr);
    qr.save().then(() => {
        res.send(qr);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
};

module.exports.updateQr = async (req, res) => {
    try {
        const qr = await Qr.findByIdAndUpdate(req.body.id, req.body);
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

module.exports.deleteQr = async (req, res) => {
    try {
        const qr = await Qr.findByIdAndDelete(req.body.id);
        res.send("Qr deleted");
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

module.exports.qrById = async (req, res) => {
    try {
        const qr = await Qr.findById(req.body.id);
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

module.exports.allQr = async (req, res) => {
    try {
        const qr = await Qr.find({});
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

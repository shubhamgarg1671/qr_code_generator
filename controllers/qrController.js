const _ = require('lodash');
const jwt = require('jsonwebtoken');
const firebaseAdmin = require('../Config/firebaseAdmin.config');
const Qr  = require('../model/qr');
const QrType = require('../model/qrType.js')

module.exports.createQr = async (req, res) => {
    var body = req.body;
    console.log(body);
    const user = req.user;
    const qr = new Qr(body);
    qr.creator = user._id;
    const qrType = new QrType(body);
    qr.qrTypeId = qrType._id;
    qr.save().then(() => {
        qrType.save().then(() => {
            res.send([qr, qrType]);
        }).catch((e)=>{
            res.status(400).send(e);
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
};

module.exports.updateQr = async (req, res) => {
    try {
        const qr = await Qr.findByIdAndUpdate(req.body.id, req.body, {new:true} );
        if (qr == null)
        {
            throw new Error("qr not found");
        }
        const qrType = await QrType.findByIdAndUpdate(qr.qrTypeId, req.body, {new:true});
        res.send([qr, qrType]);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

module.exports.deleteQr = async (req, res) => {
    try {
        const qr = await Qr.findById(req.body.id);
        if (qr == null)
        {
            throw new Error("qr not found");
        }
        const qrType = await QrType.findByIdAndDelete(qr.qrTypeId);
        const qr1 = await Qr.findByIdAndDelete(req.body.id);
        console.log(qr1);
        console.log(typeof(qr1));
        res.send("Qr deleted");
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

module.exports.qrById = async (req, res) => {
    try {
        const qr = await Qr.findById(req.body.id);
        console.log(qr);
        if (qr == null)
        {
            throw new Error("qr not found");
        }
        const qrType = await QrType.findById(qr.qrTypeId);
        res.send([qr, qrType]);
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
};

module.exports.allQr = async (req, res) => {
    try {
        const qr = await Qr.find({});
        res.send(qr);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

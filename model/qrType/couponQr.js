const mongoose = require('mongoose');

var couponQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    couponColorPrimary:String,
    couponColorButton:String,
    couponImageString:String,
    couponImageString:String,
    couponCompany:String,
    couponHeadline:String,
    couponDescription:String,
    saleBadge:String,
    couponName:String,
    couponValidUntil:String,
    couponTNC:String,
    couponWebsite:String,
    couponAddressLin1:String,
    couponAddressLin2:String,
    couponWelcomeImage:String
}, {
    timestamps:true
})

var couponQr = mongoose.model('couponQr', couponQrSchema)
module.exports = couponQr
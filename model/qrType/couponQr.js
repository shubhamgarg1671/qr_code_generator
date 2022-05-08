const mongoose = require('mongoose');

var couponQrSchema = new mongoose.Schema({
    couponAddressLin1:String,
    couponAddressLin2:String,
    couponWelcomeImage:String
}, {
    timestamps:true
})

var couponQr = mongoose.model('couponQr', couponQrSchema)
module.exports = couponQr
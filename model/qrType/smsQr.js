const mongoose = require('mongoose');

var smsQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    phone_number:String,
    message:String
}, {
    timestamps:true
})

var smsQr = mongoose.model('smsQr', smsQrSchema)
module.exports = smsQr
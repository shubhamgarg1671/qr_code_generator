const mongoose = require('mongoose');

var emailQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    email:String,
    subject:String,
    message:String
}, {
    timestamps:true
})

var emailQr = mongoose.model('emailQr', emailQrSchema)
module.exports = emailQr
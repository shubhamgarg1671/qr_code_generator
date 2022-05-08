const mongoose = require('mongoose');

var wifiQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    network_name:String,
    password:String,
    encryption:String
}, {
    timestamps:true
})

var wifiQr = mongoose.model('wifiQr', wifiQrSchema)
module.exports = wifiQr
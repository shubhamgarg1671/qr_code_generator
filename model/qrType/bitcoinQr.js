const mongoose = require('mongoose');

var bitcoinQrSchema = new mongoose.Schema({
    cryptocurrency:String,
    amount:Number,
    receiverBitcoinAddress:String,
    message:String
}, {
    timestamps:true
})

var bitcoinQr = mongoose.model('bitcoinQr', bitcoinQrSchema)
module.exports = bitcoinQr
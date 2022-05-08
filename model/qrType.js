const mongoose = require('mongoose');

var qrTypeSchema = new mongoose.Schema({
    cryptocurrency:String,
    amount:Number,
    receiverBitcoinAddress:String,
    message:String
}, {
    timestamps:true
})

var qrType = mongoose.model('qrType', qrTypeSchema)
module.exports = qrType
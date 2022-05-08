const mongoose = require('mongoose');

var textQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    text:String
}, {
    timestamps:true
})

var textQr = mongoose.model('textQr', textQrSchema)
module.exports = textQr
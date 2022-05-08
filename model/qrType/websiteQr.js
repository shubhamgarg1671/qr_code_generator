const mongoose = require('mongoose');

var websiteQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    url:String
}, {
    timestamps:true
})

var websiteQr = mongoose.model('websiteQr', websiteQrSchema)
module.exports = websiteQr
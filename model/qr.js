const mongoose = require('mongoose');

var QrSchema = new mongoose.Schema({
    creator: String,
    name:String,
    imageString:String,
    folder:String,
    QRtype:String,
    isDynamic:Boolean,
    designCode:String,
    frameNumber:String,
    logo:String,
    isDefaultLogo:Boolean,
    color:String,
    BGcolor:String,
    shape:String
}, {
    timestamps:true
})

var Qr = mongoose.model('Qr', QrSchema)
module.exports = Qr
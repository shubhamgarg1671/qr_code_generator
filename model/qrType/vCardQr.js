const mongoose = require('mongoose');

var vCardQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    first_name:String,
    last_name:String,
    mobile_contact:String,
    phone_contact:String,
    fax_contact:String,
    email:String,
    company:String,
    your_job:String,
    street:String,
    city:String,
    zip:Number,
    state:String,
    country:String,
    website:String
}, {
    timestamps:true
})

var vCardQr = mongoose.model('vCardQr', vCardQrSchema)
module.exports = vCardQr
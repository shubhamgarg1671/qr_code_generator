const mongoose = require('mongoose');

var socialMediaQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    socialMediaColorPrimary:String,
    socialMediaColorButton:String,
    socialMediaImageString:String,
    socialMediaHeadline:String,
    socialMediaAboutUs:String,
    socialLinks:{
        type:[
            {name:String,
            description:String}
        ]
    },
    socialMediaWelcomeImage:String,
    shareButtonActive:Boolean
}, {
    timestamps:true
})

var socialMediaQr = mongoose.model('socialMediaQr', socialMediaQrSchema)
module.exports = socialMediaQr
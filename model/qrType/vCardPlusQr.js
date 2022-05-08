const mongoose = require('mongoose');

var vCardPlusQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    vCardColorPrimary:String,
    vCardColorButton:String,
    useColorGradiant:Boolean,
    vCardColorGradiant:String,
    vCardImageString:String,
    vCardFirstName:String,
    vCardLastName:String,
    vCardPhoneNumber:String,
    vCardMobileNumber:String,
    vCardFaxNumber:String,
    vCardEmail:String,
    vCardAddressLin1:String,
    vCardAddressLin2:String,
    vCardWebsite:String,
    vCardSummary:String,
    socialLinks:{
        type:[
            {name:String,
            description:String}
        ]
    },
    vCardWelcomeImage:String,
    shareButtonActive:Boolean
}, {
    timestamps:true
})

var vCardPlusQr = mongoose.model('vCardQrPlus', vCardPlusQrSchema)
module.exports = vCardPlusQr
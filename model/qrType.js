const mongoose = require('mongoose');

var qrTypeSchema = new mongoose.Schema({
    cryptocurrency:String,
    amount:Number,
    receiverBitcoinAddress:String,
    message:String,
    colorPrimary:String,
    colorButton:String,
    colorGradiant:String,
    useColorGradiant:Boolean,
    imageString:String,
    couponCompany:String,
    couponHeadline:String,
    couponDescription:String,
    saleBadge:String,
    couponName:String,
    couponValidUntil:String,
    couponTNC:String,
    website:String,
    streetAddress:String,
    numberAddrees:String,
    cityAddrees:String,
    stateAddrees:String,
    zipAddrees:String,
    countryAddrees:String,
    welcomeImage:String,
    email:String,
    emailSubject:String,
    phoneNumber:String,
    firstName:String,
    lastName:String,
    mobileNumber:String,
    faxNumber:String,
    headline:String,
    aboutUs:String,
    shareButtonActive:Boolean,
    text:String,
    isTweetOrProfile:Boolean,
    socialLinks:{
        type:[
            {name:String,
            description:String}
        ]
    },
    company:String,
    job:String,
    summary:String,
    networkName:String,
    password:String,
    encryption:String,
    button:{
        type: [{
            name:String,
            link:String
        }]
    },
    openingHours :{
        type:[{
            day:String,
            openTime:String,
            closeTime:String
        }]
    },
    features:{
        type:[{
            name:String,
            isAvailable:Boolean
        }]
    },
    catagories:{
        type:[{
            name:String
        }]
    },
    question:String,
    ratingStyle:String,
    videoURL:String
}, {
    timestamps:true
})

var qrType = mongoose.model('qrType', qrTypeSchema)
module.exports = qrType
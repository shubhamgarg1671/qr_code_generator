const mongoose = require('mongoose');

var twitterQrSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Qr'
    },
    isProfile:Boolean,
    isTweet:Boolean,
    twitter_text:{
        type:String,
        maxlength:280
    }
}, {
    timestamps:true
})

var twitterQr = mongoose.model('twitterQr', twitterQrSchema)
module.exports = twitterQr
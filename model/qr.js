const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
    data: {
        type:String
    },
	uid:String,
})

var User = mongoose.model('Users', UserSchema)
module.exports = User
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    name:string,
    email: {
        type: String,
        minlength: 1,
        trim: true,
        unique: true,
        require:true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not a valid email.'
        }
    },
    password: {
        type: String,
        minlength: 6
    },
    isAdmin:Boolean

})

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
    return user.save().then(() => {
        return token
    });
};

UserSchema.statics.findByCredentials =function(email, password) {
    var User = this;
    return User.findOne({email}).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject(err);
                }
            });
        });
    });
};

UserSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, Salt) => {
            bcrypt.hash(user.password, Salt, (err, hash) => {
                user.password = hash;
                next();
            });
        })
    } else {
        next();
    }
});
var User = mongoose.model('User', UserSchema)
module.exports = {User};
const { func } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maslength: 255
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
        maslength: 1024
    },
    admin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);

function validateUser(req){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(req);
};

async function findUserByEmail(email){
    return await User.findOne({ email: email });
};

async function findUserById(id){
    return await User.findById(id);
};

exports.User = User;
exports.validate = validateUser;
exports.findUserByEmail = findUserByEmail;
exports.findUserById = findUserById;
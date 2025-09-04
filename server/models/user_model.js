const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength:[3,'Username must be 3 characters long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength:[10, 'Email must be 10 characters long']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[8, 'Password must be 8 characters long']
    }
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;
var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    emailAddress : String,
    password : String,
    profNumber : String
})

var Login = mongoose.model('Login',loginSchema);

module.exports = Login;
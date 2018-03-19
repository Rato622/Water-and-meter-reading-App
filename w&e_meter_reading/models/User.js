var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    identity:  String,
    resAddress:String, 
    elecM: String,
    waterM:  String,
    gender : String,
    profileNum :String,
    password : String,
    contactDetails : {
        cellNumber : String,
        emailAddress : String,
    },
      role : String,

})
UserSchema.plugin(autoIncrement.plugin, 'User');
var User = mongoose.model('User',UserSchema);

module.exports = User;

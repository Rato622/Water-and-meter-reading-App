var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
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

var Person = mongoose.model('Person',PersonSchema);

module.exports = Person;

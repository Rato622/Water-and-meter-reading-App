var mongoose = require('mongoose');

var ElecSchema = new mongoose.Schema({ 
    elecM: String,
    electricRead : 
        [
            {
            month : {type : Date , default : Date.now},
            readingsE : Number,
        }
    ]

})

var ElecSchema = mongoose.model('Elec',ElecSchema);

module.exports = ElecSchema;
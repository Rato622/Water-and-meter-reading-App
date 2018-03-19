var mongoose = require('mongoose');

var WaterSchema = new mongoose.Schema({
    waterM:  String,
    waterRead : 
        [
            {
                month : {type : Date , default : Date.now},
                readingsW : Number,
            }
        ]
    ,

})

var Water = mongoose.model('Water',WaterSchema);

module.exports = Water;
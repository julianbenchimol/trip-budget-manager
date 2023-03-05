const mongoose = require('mongoose');

const {Schema} = mongoose;

const geoSchema = new Schema({
    hotels: {
        type: String,
        
    },
//    restauraunts: {
//    },
//    attractions: {
//    }
});

const Geoid = mongoose.model('Geoid', geoSchema);

module.exports = Geoid
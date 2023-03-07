const mongoose = require('mongoose');
const api = require('../../client/src/utils/api');
const {Schema} = mongoose;

const geoSchema = new Schema({
    hotels: {
        type: String,
        name: String,
        location_string: String,
        
    },
//    restauraunts: {
//    },
//    attractions: {
//    }
});

const Geoid = mongoose.model('Geoid', geoSchema);

module.exports = Geoid
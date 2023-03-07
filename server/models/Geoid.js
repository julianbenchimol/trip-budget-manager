const mongoose = require('mongoose');
const api = require('../../client/src/utils/api');
const {Schema} = mongoose;

const geoSchema = new Schema({
    hotelName: {
        type: String,
        required: true
    },
    hotelLocation: {
        type: String,
        required: true
    }
//    restauraunts: {
//    },
//    attractions: {
//    }
});

const Geoid = mongoose.model('Geoid', geoSchema);

module.exports = Geoid
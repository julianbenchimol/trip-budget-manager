const mongoose = require('mongoose');

const {Schema} = mongoose;

const tripSchema = new Schema({
    
    name: {
        type: String,
       
    },
    destination: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
        min: 0
    },
    dates: {
        type: String,
        required: true
    },
//    chat: {future development
//    }
});



module.exports = tripSchema;
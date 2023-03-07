const mongoose = require('mongoose');

const {Schema} = mongoose;

const tripSchema = new Schema({
    name: {
        type: String,
        required: true
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
    trips: {
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }
//    chat: {future development
//    }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
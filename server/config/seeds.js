const db = require('./connection');

const {User, Trip, Geoid} = require('../models');

db.once('open', async () => {
    await Geoid.deleteMany();

    const hotels = await Geoid.insertMany([
        {name: ''},
        {location: ''}
    ]);

    console.log('hotel data seeded');

    await Trip.deleteMany();

    const trips = await Trip.insertMany([
        {name: ''},
        {destination: ''},
        {budget: ''},
        {dates: ''}
    ]);

    console.log('trips seeded');

    await User.deleteMany();

    await User.create({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    console.log('users seeded');

    process.exit();
})
const { Trip, User } = require('../models');

const resolvers = {
  Query: {
    trips: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await Trip.find({})
    },

    users: async () => {
      // Populate the professor subdocument when querying for classes
      return await User.find({});
    }
    }
};

  

module.exports = resolvers;
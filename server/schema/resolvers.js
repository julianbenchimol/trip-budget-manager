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
    },
  Mutation: {
    addUser: async (parent, args) => {
      const user= await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

  

module.exports = resolvers;
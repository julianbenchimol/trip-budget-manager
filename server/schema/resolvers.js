const { Trip, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    trips: async () => {
   
      return await Trip.find({});
    },

    users: async (parent, args) => {
   
      return await User.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addTrip: async(parent, args, context) => {
      console.log(context);
      if (context.user) {
        const trips = await User.findByIdAndUpdate(context.user._id, { $push: { trips: args }}, {new: true} );
        return trips;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

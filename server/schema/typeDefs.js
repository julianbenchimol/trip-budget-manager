const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    trips: [Trip]
  }

  type Trip {
    _id: ID
    name: String!
    destination: String!
    budget: Float!
    dates: [Int]!
  }

  type Query {
    users: [User]
    trips: [Trip]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addTrip(
      name: String!
      destination: String!
      budget: String!
      dates: String
    ): Trip
  }
`;

module.exports = typeDefs;

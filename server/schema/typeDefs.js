const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
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
  }
`;

module.exports = typeDefs;

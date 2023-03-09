import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_TRIP = gql`
mutation AddTrip($name: String, $destination: String!, $budget: String!, $dates: String!) {
  addTrip(name: $name, destination: $destination, budget: $budget, dates: $dates) {
    _id
    trips {
      _id
      name
      destination
      budget
      dates
    }
  }
}
`

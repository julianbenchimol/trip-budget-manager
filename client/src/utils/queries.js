import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query allProfiles {
    {
        _id
        name
        skills
    }
}
`;
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      trips{
        name
        destination
        budget
        dates

      }
    }
  }`;
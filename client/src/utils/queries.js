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
import { gql } from "graphql-request";
export const animalsQuery = gql`
  query Animals {
    animalCollection(locale: "cs") {
      items {
        sys { id }
        name,
        img {
          url,
          width,
          height
        },
        text{
          json
        }
      }
    }
  }
`;

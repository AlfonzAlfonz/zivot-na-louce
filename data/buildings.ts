import { imageFragment } from "data";
import { gql } from "graphql-request";

export const listBuildingsQuery = gql`
  query ListBuildings {
    buildingCollection {
      items {
        sys { id },
        img {
          url,
          width,
          height,
          title
        },
        name,
        text {
          json
        }
      }
    }
  }
`;

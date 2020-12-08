import { gql } from "graphql-request";

export const aboutUsQuery = gql`
 query AboutUs {
    aboutUs(id: "2hhHiWspc4nGMeJWga4ZWc") {
      title,
      whoWeAre,
      whoWeAreText{ 
        json
      },
      vision,
      visionText { 
        json
      },
      project,
      projectText { 
        json
      },
      contact,
      contactText {
        json
      }
    }
  }
`;

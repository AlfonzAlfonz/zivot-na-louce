import { imageFragment } from "data";
import { gql } from "graphql-request";

export const aboutUsQuery = gql`
 query AboutUs {
    aboutUs(id: "2hhHiWspc4nGMeJWga4ZWc") {
      title,
      whoWeAre,
      whoWeAreText {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      },
      vision,
      visionText {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      },
      project,
      projectText {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      },
      contact,
      contactText {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      }
    }
  }

  ${imageFragment}
`;

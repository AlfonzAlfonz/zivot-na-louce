import { imageFragment } from "data";
import { gql } from "graphql-request";

export const adoptionQuery = gql`
  query Adoption {
    adoption(id: "t9K6Kq2xD7uMnWpW349HP") {
      title
      text {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      }
      animalsCollection {
        items {
          name
          img {
            ...imageFragment
          }
          perex {
            json
          }
        }
      }
      contact {
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

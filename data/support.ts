import { imageFragment } from "data";
import { gql } from "graphql-request";

export const supportQuery = gql`
  query Support {
    support(id: "6VJQTsNwdDuMWfKrHbe6qe") {
      title
      supportUsTitle
      supportUs
      supportUsText {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      }
      links {
        json
        links {
          assets {
            block {
              ...imageFragment
            }
          }
        }
      }
      supportUs
      text
      ctaButton
    }
  }

  ${imageFragment}
`;

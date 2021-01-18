import { gql } from "graphql-request";

export const supportQuery = gql`
  query Support {
    support(id: "6VJQTsNwdDuMWfKrHbe6qe") {
      title
      supportUsTitle
      supportUs
      supportUsText {
        json
      }
      links {
        json
      }
      supportUs
      text
      ctaButton
    }
  }
`;

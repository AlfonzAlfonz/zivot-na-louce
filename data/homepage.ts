import { gql } from "graphql-request";
export const homepageQuery = gql`
  query Homepage {
    homepage(id: "4VGfrMIhPGr08XYD1ZxH1O") {
      title
      text
      whoWeAreTitle
      whoWeAreText {
        json
      }
      fotkyCollection {
        items {
          url
          width
          height
          title,
          description
        }
      }
    }
  }
`;

import { imageFragment } from "data";
import { gql } from "graphql-request";

export const animalsQuery = gql`
  query Animals {
    animalCollection(locale: "cs", where: { gone: false }) {
      items {
        sys { id }
        name,
        img {
          url,
          width,
          height,
          title
        },
        perex {
          json
        },
        text{
          json
        }
      }
    }
  }
`;

export const animalsRipQuery = gql`
  query AnimalsRip {
    animalCollection(locale: "cs", where: { gone: true }) {
      items {
        sys { id }
        name,
        img {
          url,
          width,
          height,
          title
        },
        perex {
          json
        },
        text {
          json
        }
      }
    }
  }
`;

export const animalsInfoQuery = gql`
  query AnimalsInfo {
    animals(id: "6Tp1ZGGzOodTn70DlKTXR7") {
      photosCollection {
        items {
          ...imageFragment
        }
      }
    }
  }

  ${imageFragment}
`;

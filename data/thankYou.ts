import { imageFragment } from "data";
import { gql } from "graphql-request";

export const thankYouQuery = gql`
  query ThankYou {
  thankyou(id: "G1QncecH7SfDb9KKlERid") {
    otherCollection {
      items {
        ...imageFragment
      }
    }
  }
}

  ${imageFragment}
`;

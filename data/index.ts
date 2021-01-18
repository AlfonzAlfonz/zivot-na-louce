import { request as _request, gql } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";

export const request = <T extends object>(query: RequestDocument, v?: {}) =>
  _request<T>(`https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID!}?access_token=${process.env.ACCESS_TOKEN!}`, query, v);

export const imageFragment = gql`
  fragment imageFragment on Asset {
    url,
    width,
    height,
    description,
    title
  }
`;

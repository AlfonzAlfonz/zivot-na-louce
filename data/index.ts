import { request as _request, gql } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";

export const request = <T extends object>(query: RequestDocument) =>
  _request<T>(`https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}?access_token=${process.env.ACCESS_TOKEN}`, query);

import { gql } from "graphql-request";

export const homepageArticles = gql`
  query HomepageArticles {
    articleCollection(locale: "cs", limit: 3, order: sys_publishedAt_DESC) {
      items {
        sys { 
          id
          publishedAt
        }
        img {
          url,
          width,
          height
        },
        title,
        perex
      }
    }
  }
`;

export const listArticlesQuery = gql`
query ListArticlesQuery {
  articleCollection(locale: "cs", order: sys_publishedAt_DESC) {
      items {
        sys { 
          id
          publishedAt
        }
        img {
          url,
          width,
          height
        },
        title,
        perex
      }
    }
}
`;

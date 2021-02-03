import { imageFragment } from "data";
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
          ...imageFragment
        },
        title,
        perex
      }
    }
  }

  ${imageFragment}
`;

export const listArticlesQuery = gql`
query ListArticles ($limit: Int!, $skip: Int!, $category: String!) {
  articleCollection(locale: "cs", order: sys_publishedAt_DESC, limit: $limit, skip: $skip, where: { type_contains: $category }) {
      items {
        sys { 
          id
          publishedAt
        }
        img {
          ...imageFragment
        },
        title,
        perex
      }
      total
    }
  }

  ${imageFragment}
`;

export const articleDetail = gql`
  query ArticleDetail($id: String!) {
    article(id: $id, locale: "cs") {
      sys { publishedAt }
      title
      img {
        ...imageFragment
      }
      perex
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
      galleryCollection(locale: "cs") {
        items {
          url
          width
          height
          description
          title
        }
      }
    }
  }

  ${imageFragment}
`;

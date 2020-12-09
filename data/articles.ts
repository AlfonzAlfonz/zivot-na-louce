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
          height,
          title
        },
        title,
        perex
      }
    }
  }
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
          url,
          width,
          height,
          title
        },
        title,
        perex
      }
      total
    }
}
`;

export const articleDetail = gql`
  query ArticleDetail($id: String!) {
  article(id: $id, locale: "cs") {
    sys { publishedAt }
    title
    img {
      url
      width
      height
      title
    }
    perex
    text {
      json
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

`;

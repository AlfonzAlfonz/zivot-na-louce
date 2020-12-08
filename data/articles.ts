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
query ListArticles {
  articleCollection(locale: "cs", order: sys_publishedAt_DESC) {
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

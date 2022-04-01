const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const { data } = await res.json();
  return data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
        query AllPosts {
            posts(first: 15) {
              edges {
                node {
                  id
                  content
                  excerpt
                  slug
                  title
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        `
  );
  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `query AllPosts {
      posts(first: 100) {
        edges {
          node {
            slug
          }
        }
      }
    }`
  );
  return data?.posts;
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data;
}

export async function getAllCategories() {
  const data = await fetchAPI(
    `
  query AllCategories {
    categories {
      nodes {
        id
        name
        count
        uri
        slug
      }
    }
  }`
  );

  const categories = data?.categories.nodes.filter((category) => {
    if (category.count === null || category.name === "All Posts") {
      return false;
    } else {
      return true;
    }
  });
  return categories;
}

export async function getCategoryPosts(catID) {
  const data = await fetchAPI(
    `
    query CategoryPosts($id: ID!) {
      category(id: $id) {
        id
        count
        posts {
          edges {
            node {
              id
              content
              excerpt
              slug
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: { id: catID },
    }
  );
  return data;
}



// {
//   page(id: "43", idType: DATABASE_ID) {
//     ACF_HomePage {
//       cat1Link
//       cat1Text
//       cat2Link
//       cat2Text
//       cat3Link
//       cat3Text
//       cat1Image {
//         mediaItemUrl
//       }
//       cat2Image {
//         mediaItemUrl
//       }
//       cat3Image {
//         mediaItemUrl
//       }
//     }
//   }
// }
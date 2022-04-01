import { getAllCategories, getCategoryPosts } from "../../lib/api";

import {Layout,Post} from '../../components';

export default function Category({ categoryPosts }) {
  const posts = categoryPosts.category.posts.edges;
  return (
    <Layout>
      {posts.map((post) => (
        <Post key={post.node.id} post={post.node} />
      ))}
    </Layout>
  );
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories();
  return {
    paths: allCategories.map((category) => `/category/${category.id}`),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const categoryPosts = await getCategoryPosts(context.params.catID);
  return {
    props: { categoryPosts },
  };
}

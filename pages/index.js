import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts: { edges } }) {
  return (
    <Layout>
      {edges.map((post) => (
        <Post key={post.node.id} post={post.node} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: { allPosts },
  };
}

import Image from "next/image";

import { getAllPostsWithSlug, getPost } from "../../lib/api";

import { Layout } from "../../components";

import {
  PostPageWrapper,
  Title,
  Content,
} from "../../styles/CustomStyles.styles";

export default function PostPage({ postData }) {
  return (
    <Layout>
      <PostPageWrapper>
        <Image
          src={postData.featuredImage.node.mediaItemUrl}
          width={1000}
          height={400}
          alt={postData.title}
        />
        <Title dangerouslySetInnerHTML={{ __html: postData.title }} />
        <Content dangerouslySetInnerHTML={{ __html: postData.content }} />
      </PostPageWrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const data = await getPost(context.params.slug);
  return {
    props: { postData: data.post },
  };
}

import Image from "next/image";

import { getACFDetails, getAllPosts } from "../lib/api";

import { Category, Layout, Post } from "../components";

import { CategoriesWrapper, SectionTitle } from "../styles/CustomStyles.styles";

export default function Home({
  allPosts: { edges },
  ACfildes: {
    page: { ACF_HomePage: ACF },
  },
}) {
  return (
    <Layout>
      <Image
        src={ACF.heroImage.mediaItemUrl}
        height={530}
        width={1100}
        alt='hero banner'
      />
      <CategoriesWrapper>
        <SectionTitle>All Categories</SectionTitle>
        <Category
          img={ACF.cat1Image.mediaItemUrl}
          link={ACF.cat1Link}
          text={ACF.cat1Text}
          cat='Music'
        />
        <Category
          img={ACF.cat2Image.mediaItemUrl}
          link={ACF.cat2Link}
          text={ACF.cat2Text}
          cat='Movie'
        />
        <Category
          img={ACF.cat3Image.mediaItemUrl}
          link={ACF.cat3Link}
          text={ACF.cat3Text}
          cat='Art'
        />
      </CategoriesWrapper>
      <SectionTitle>Latest Posts</SectionTitle>
      {edges.slice(0, 3).map((post) => (
        <Post key={post.node.id} post={post.node} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  const ACfildes = await getACFDetails();
  return {
    props: { allPosts, ACfildes },
  };
}

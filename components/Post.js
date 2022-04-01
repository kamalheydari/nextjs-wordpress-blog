import Link from "next/link";
import Image from "next/image";

import { PostWrapper, Title } from "../styles/CustomStyles.styles";

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <div className='post__header'>
        <Image
          src={post.featuredImage.node.mediaItemUrl}
          width={720}
          height={420}
          alt={post.title}
        />
      </div>
      <div className='post__body'>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <Title
              dangerouslySetInnerHTML={{
                __html: post.title.slice(0, 80) + "...",
              }}
            />
          </a>
        </Link>
        <div
          className='post__content'
          dangerouslySetInnerHTML={{
            __html: post.excerpt.substring(0, 120) + "...",
          }}
        />
        <Link href={`/blog/${post.slug}`}>
          <a className='post__link'>Read more</a>
        </Link>
      </div>
    </PostWrapper>
  );
};

export default Post;

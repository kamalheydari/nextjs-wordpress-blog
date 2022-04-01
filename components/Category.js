import Image from "next/image";
import Link from "next/link";

import { CatWrapper } from "../styles/CustomStyles.styles";

const Category = ({ img, link, text,cat }) => {
  return (
    <CatWrapper>
      <div className='cat__img'>
        <Image
          className='cat__img'
          src={img}
          width={600}
          height={320}
          alt='cat img'
        />
      </div>
      <div className='cat__desc'>
        <p>{text}</p>
        <Link href={link}>
          <a>See all {cat} posts</a>
        </Link>
      </div>
    </CatWrapper>
  );
};

export default Category;

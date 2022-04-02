import Link from "next/link";
import { useRouter } from "next/router";

import { NavigationWrapper } from "../styles/CustomStyles.styles";

const Navigation = () => {
  const router = useRouter();

  const menuItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Music", path: "/category/dGVybToxMQ==" },
    { id: 2, name: "Art", path: "/category/dGVybTo4" },
    { id: 3, name: "Movie", path: "/category/dGVybToxMA==" },
  ];

  return (
    <NavigationWrapper>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <a className={router.asPath === item.path ? "nav-active" : null}>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;

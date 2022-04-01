import { GlobalStyles } from "twin.macro";
import Navigation from "./Navigation";
const Layout = ({ children,  }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation  />
      {children}
    </>
  );
};

export default Layout;

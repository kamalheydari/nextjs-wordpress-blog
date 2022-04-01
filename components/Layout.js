import { GlobalStyles } from "twin.macro";

import { Navigation, Footer } from ".";

import { LayoutWrapper } from "../styles/CustomStyles.styles";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

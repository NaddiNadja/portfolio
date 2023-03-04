import React from "react";
import { PageTitleContext } from "./_app";
import AboutMe from "components/about-me";

const Home = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("About me");
  }, [page]);

  return <AboutMe />;
};

export default Home;

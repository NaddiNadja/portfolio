import React from "react";
import { PageTitleContext } from "./_app";
import AboutMe from "components/about";

const Home = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("About");
  }, [page]);

  return <AboutMe />;
};

export default Home;

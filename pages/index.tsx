import CV from "components/cv";
import React from "react";
import { PageTitleContext } from "./_app";

const Home = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("CV");
  }, [page]);

  return <CV />;
};

export default Home;

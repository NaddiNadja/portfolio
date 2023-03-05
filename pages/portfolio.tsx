import React from "react";
import Portfolio from "components/projects/portfolio";
import { PageTitleContext } from "./_app";

const PortfolioPage = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("Portfolio");
  }, [page]);

  return <Portfolio />;
};

export default PortfolioPage;

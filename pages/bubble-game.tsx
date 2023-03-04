import BubbleGame from "components/games/bubble-game";
import React from "react";
import { PageTitleContext } from "./_app";

const BubbleGamePage = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("Bubble game");
  }, [page]);

  return <BubbleGame />;
};

export default BubbleGamePage;

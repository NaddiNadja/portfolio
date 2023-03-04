import TicTacToe from "components/games/tic-tac-toe";
import React from "react";
import { PageTitleContext } from "./_app";

const TicTacToePage = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("Tic Tac Toe");
  }, [page]);

  return <TicTacToe />;
};

export default TicTacToePage;

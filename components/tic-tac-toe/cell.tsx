import React from "react";
import styled from "styled-components";
import { TicTacToeContext } from ".";

interface Props {
  i: number;
  onClick?: () => void;
}

const Container = styled.div`
  background-color: #fff;
  cursor: ${(p: Props) => (p.onClick ? "pointer" : "default")};
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
`;

const Cell: React.FC<Props> = ({ i, onClick }) => {
  const { board } = React.useContext(TicTacToeContext);

  return (
    <Container onClick={onClick} i={i}>
      {board[i] === 0 && <Content></Content>}
      {board[i] === 1 && <Content>X</Content>}
      {board[i] === 2 && <Content>O</Content>}
    </Container>
  );
};

export default Cell;

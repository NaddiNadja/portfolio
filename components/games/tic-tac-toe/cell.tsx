import React from "react";
import styled from "styled-components";
import { TicTacToeContext } from ".";

interface Props {
  i: number;
  onClick?: () => void;
}

const Container = styled.div`
  background-color: var(--beige);
  cursor: ${(p: Props) => (p.onClick ? "pointer" : "default")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  borderradius: 10px;
`;
//box-shadow: 0 0 4px #0000003e;

const Content = styled.div`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  color: ${(p: { player?: number }) =>
    p.player === 1 ? "var(--red)" : "var(--blue)"};
`;

const Cell: React.FC<Props> = ({ i, onClick }) => {
  const { board } = React.useContext(TicTacToeContext);

  return (
    <Container onClick={onClick} i={i}>
      {board[i] === 0 && <Content />}
      {board[i] === 1 && <Content player={1}>X</Content>}
      {board[i] === 2 && <Content player={2}>O</Content>}
    </Container>
  );
};

export default Cell;

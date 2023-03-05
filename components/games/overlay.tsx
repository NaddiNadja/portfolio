import React from "react";
import styled from "styled-components";
import { Row } from "../containers";

interface Props {
  message: string;
  buttons: { onClick: () => void; text: string }[];
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  z-index: 2;
`;

const GameOverlay: React.FC<Props> = ({ message, buttons }) => {
  return (
    <Container>
      {message}
      <Row>
        {buttons.map(({ text, onClick }, i) => (
          <button onClick={onClick} key={i}>
            {text}
          </button>
        ))}
      </Row>
    </Container>
  );
};

export default GameOverlay;

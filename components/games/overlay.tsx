import React from "react";
import styled from "styled-components";
import { Column } from "../containers";

interface Props {
  message: string;
  onClick: () => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  z-index: 2;
`;

const Button = styled.button`
  background-color: #c5cbe3;
  z-index: 2;
`;

const Overlay: React.FC<Props> = ({ message, onClick }) => {
  return (
    <Container>
      <Column>
        {message}
        <Button onClick={onClick}>Play again</Button>
      </Column>
    </Container>
  );
};

export default Overlay;

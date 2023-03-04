import React from "react";
import styled from "styled-components";
import { ballType } from "./logic/util/types";

interface Props {
  i: number;
  ballType: ballType;
  onClick?: () => void;
  border?: boolean;
}

const getBackgroundColor = (ballType: ballType) => {
  switch (ballType) {
    case 0:
      return "transparent";
    case 1:
      return "var(--beige)";
    case 2:
      return "var(--blue)";
    case 3:
      return "var(--red)";
    case 4:
      return "var(--yellow)";
    default:
      return "var(--light-blue)";
  }
};

const Container = styled.div`
  background-color: ${(p: Props) => getBackgroundColor(p.ballType)}};
  cursor: ${(p: Props) => (p.onClick ? "pointer" : "default")};
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  border: ${(p: Props) => (p.border ? "10px solid var(--primary)" : "none")};
`;

const Cell: React.FC<Props> = p => {
  return <Container {...p} />;
};

export default Cell;

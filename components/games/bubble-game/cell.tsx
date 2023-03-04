import React from "react";
import styled from "styled-components";
import { ballType } from "./logic/util/types";

interface Props {
  i: number;
  ballType: ballType;
  onClick?: () => void;
}

const getBackgroundColor = (ballType: ballType) => {
  switch (ballType) {
    case 0:
      return "transparent";
    case 1:
      return "#EFE2BA";
    case 2:
      return "#4056A1";
    case 3:
      return "#F13C20";
    case 4:
      return "#D79922";
    default:
      return "#C5CBE3";
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
`;

const Cell: React.FC<Props> = p => {
  return <Container {...p} />;
};

export default Cell;

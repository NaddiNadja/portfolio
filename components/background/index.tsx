import React from "react";
import styled from "styled-components";
import BackgroundSvg from "./svg";

const ContainerA = styled.div`
  position: fixed;
  z-index: -2;
  top: 20%;
  right: 0;
  width: calc(500px + 20%);
  height: 100%;
`;

const ContainerB = styled.div`
  position: fixed;
  z-index: -2;
  top: 60%;
  left: 0;
  width: calc(500px + 20%);
  height: 100%;
`;

const Background: React.FC = () => {
  return (
    <>
      <ContainerA>
        <BackgroundSvg />
      </ContainerA>
      <ContainerB>
        <BackgroundSvg />
      </ContainerB>
    </>
  );
};

export default Background;

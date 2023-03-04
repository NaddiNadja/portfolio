import useGetScroll from "@/hooks/get-scroll";
import React from "react";
import styled from "styled-components";
import BackgroundSvg from "./svg";

interface Props {
  yScroll: number;
}

const ContainerA = styled.div`
  position: fixed;
  z-index: 0;
  top: ${({ yScroll }: Props) => `calc(20% - ${0.5 * yScroll}px)`};
  right: 0;
  width: calc(500px + 20%);
  height: 100%;
`;

const ContainerB = styled.div`
  position: fixed;
  z-index: 0;
  top: ${({ yScroll }: Props) => `calc(60% - ${0.5 * yScroll}px)`};
  left: 0;
  width: calc(500px + 20%);
  height: 100%;
`;

const Background: React.FC = () => {
  const scroll = useGetScroll();
  return (
    <>
      <ContainerA yScroll={scroll.y}>
        <BackgroundSvg />
      </ContainerA>
      <ContainerB yScroll={scroll.y}>
        <BackgroundSvg />
      </ContainerB>
    </>
  );
};

export default Background;

import React from "react";
import styled from "styled-components";
import useGetScroll from "hooks/get-scroll";
import BackgroundSvg from "./svg";

interface Props {
  yScroll: number;
}

const Container = styled.div`
  position: fixed;
  z-index: 0;
  width: calc(500px + 20%);
  height: 100%;
  opacity: 0.8;
`;

const ContainerRight = styled(Container)`
  top: ${({ yScroll }: Props) => `calc(25% - ${0.5 * yScroll}px)`};
  right: 0;
`;

const ContainerLeft = styled(Container)`
  top: ${({ yScroll }: Props) => `calc(65% - ${0.5 * yScroll}px)`};
  left: 0;
`;

const Background: React.FC = () => {
  const scroll = useGetScroll();
  return (
    <>
      <ContainerLeft yScroll={scroll.y}>
        <BackgroundSvg />
      </ContainerLeft>
      <ContainerRight yScroll={scroll.y}>
        <BackgroundSvg />
      </ContainerRight>
    </>
  );
};

export default Background;

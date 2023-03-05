import React from "react";
import styled from "styled-components";
import BackgroundSvg from "components/background/svg";
import { Column, Row } from "components/containers";

const ImageRow = styled(Row)`
  margin: 40px 0;
  gap: 30px;
  padding-right: 20px;
`;

const DescriptionColumn = styled(Column)`
  width: 70%;
`;

const ImageColumn = styled(Column)`
  width: 30%;
`;

const Portfolio: React.FC = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <p>
        This website is my portfolio. It&apos;s developed using a NextJS client
        and is deployed on Vercel. The source code is available on{" "}
        <a href="https://github.com/NaddiNadja/portfolio">GitHub</a>.
      </p>
      <p>
        The games on this page are developed in my free time as small challenges
        for myself. Underneath each game, you can find a short description of
        the it. For the bubble game specifically, I have written a bit about the
        script, that I have developed to calculate solutions to the game boards.
      </p>

      <ImageRow>
        <DescriptionColumn>
          <h3>Background</h3>
          <p>
            The background on this page, is drawn entirely by me, using Adobe
            Illustrator.
          </p>
        </DescriptionColumn>
        <ImageColumn>
          <BackgroundSvg />
        </ImageColumn>
      </ImageRow>
    </>
  );
};

export default Portfolio;

import React from "react";
import BackgroundSvg from "components/background/svg";
import ImageRow from "components/image-row";
import ColorPaletteBox from "./color-palette-box";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
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

      <ImageRow
        imageElement={<BackgroundSvg />}
        position="right"
        widths={{ description: "70%", image: "30%" }}
      >
        <h3>Background</h3>
        <p>
          The background on this page, is drawn entirely by me, using Adobe
          Illustrator.
        </p>
      </ImageRow>

      <h3>Design and color palette</h3>
      <p>
        I am in no way a designer, but I have tried to create a design for this
        page that is simple, but has a pop of color.
      </p>
      <Grid>
        <ColorPaletteBox variableName="--primary" />
        <ColorPaletteBox variableName="--yellow" />
        <ColorPaletteBox variableName="--beige" />
        <ColorPaletteBox variableName="--red" />
        <ColorPaletteBox variableName="--blue" />
      </Grid>
    </>
  );
};

export default Portfolio;

import React from "react";
import BackgroundSvg from "components/background/svg";
import ImageRow from "components/image-row";
import Accessibility from "./accessibility";

const Portfolio: React.FC = () => {
  return (
    <>
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

      <Accessibility />

      <ImageRow
        imageElement={<BackgroundSvg />}
        position="right"
        widths={{ description: "70%", image: "30%" }}
      >
        <h2>Background</h2>
        <p>
          The background on this page, is drawn by me, using Adobe Illustrator.
        </p>
      </ImageRow>
    </>
  );
};

export default Portfolio;

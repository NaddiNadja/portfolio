import React from "react";

const AboutBubbleGame: React.FC = () => {
  return (
    <>
      <h2>About the game</h2>
      <p>
        This is a simple bubble game, where the goal is to remove all bubbles
        from the board. Bubbles are removed in groups of two or more by clicking
        on them. The board is randomly generated, which means that there is no
        guarantee that there is a solution.
      </p>
      <h3>Calculating a solution</h3>
      <p>
        I have developed a script that recursively tries to find a solution with
        a backtracking algorithm. As it&apos;s written in JavaScript, it&apos;s
        single-threaded and can take some time. Therefore, the script is stopped
        after 10 seconds of calculation, which happens for most full boards.
        There is a better chance of finding a solution if you clear some of the
        bubbles first.
      </p>
    </>
  );
};

export default AboutBubbleGame;

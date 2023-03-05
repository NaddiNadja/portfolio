import React from "react";
import useGetAge from "hooks/get-age";

const About: React.FC = () => {
  const getAge = useGetAge();

  return (
    <>
      <h2>About</h2>
      <section>
        <h3>About me</h3>
        <p>
          My name is Nadja and I&apos;m a {getAge()} year old software
          developer. I am currently writing my bachelor thesis at the IT
          University of Copenhagen.
        </p>
        <p>
          I am passionate about problem solving, being creative and learning new
          things.
        </p>
        <h3>About this site</h3>
        <p>
          I have made this page to be able to give interested people a sneak
          peak into some of my projects. The <em>Projects</em> menu item holds
          information about some of my projects, including this page itself.
        </p>
      </section>
    </>
  );
};

export default About;
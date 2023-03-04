import React from "react";

const AboutMe: React.FC = () => {
  const getAge = () => {
    const today = Date.now();
    const birthDate = new Date(1995, 5, 29).getTime();
    const dif = new Date(today - birthDate);
    return dif.getFullYear() - 1970;
  };

  return (
    <>
      <h2>About me</h2>
      <p>
        My name is Nadja and I&apos;m a {getAge()} year old software developer.
        I am currently writing my bachelor thesis at the IT University of
        Copenhagen.
      </p>
      <p>
        I am passionate about problem solving, being creative and learning new
        things.
      </p>
    </>
  );
};

export default AboutMe;

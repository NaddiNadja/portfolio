import React from "react";
import useGetAge from "hooks/get-age";
import Image from "next/image";
import ImageRow from "components/image-row";
import selfie from "public/selfie2.jpg";

const About: React.FC = () => {
  const getAge = useGetAge();

  return (
    <section>
      <ImageRow
        imageElement={
          <Image
            style={{
              width: "100%",
            }}
            src={selfie}
            alt="A picture of me"
            layout="responsive"
          />
        }
        position="right"
      >
        <h2>About me</h2>
        <p>
          My name is Nadja and I&apos;m a {getAge()} year old software
          developer. I am currently writing my bachelor thesis at the IT
          University of Copenhagen.
        </p>
        <p>
          I am passionate about problem solving, being creative and learning new
          things.
        </p>
        <h2>About this site</h2>
        <p>
          I have made this page to be able to give interested people a sneak
          peak into some of my projects. The <em>Projects</em> menu item holds
          information about some of my projects, including this page itself.
        </p>
      </ImageRow>
    </section>
  );
};

export default About;

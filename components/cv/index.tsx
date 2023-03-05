import React from "react";
import Education from "./education";
import Experiences from "./experiences";

const CV: React.FC = () => {
  return (
    <>
      <section>
        <Experiences />
        <Education />
      </section>
    </>
  );
};

export default CV;

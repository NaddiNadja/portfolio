import React from "react";
import ExperienceItem from "./experience-item";
import experiences from "./experience-data";

const Experiences: React.FC = () => {
  return (
    <>
      <h2>Experience</h2>
      {experiences.map((company, i) => (
        <ExperienceItem key={i} company={company} />
      ))}
    </>
  );
};

export default Experiences;

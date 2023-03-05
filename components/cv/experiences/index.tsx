import React from "react";
import ExperienceItem from "./experience-item";
import experiences from "./experience-data";

const Experiences: React.FC = () => {
  return (
    <>
      <h2>Experience</h2>
      <section>
        {experiences
          .filter(c => !c.volunteer)
          .map((company, i) => (
            <ExperienceItem key={i} company={company} />
          ))}
      </section>
      <h2>Voluntary work</h2>
      <section>
        {experiences
          .filter(c => c.volunteer)
          .map((company, i) => (
            <ExperienceItem key={i} company={company} />
          ))}
      </section>
    </>
  );
};

export default Experiences;

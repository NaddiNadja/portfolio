import React from "react";
import EducationItem from "./education-item";
import educations from "./education-data";

const Education: React.FC = () => {
  return (
    <>
      <h2>Education</h2>
      <section>
        {educations.map(education => (
          <EducationItem key={education.title} education={education} />
        ))}
      </section>
    </>
  );
};

export default Education;

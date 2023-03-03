import React from "react";
import EducationItem from "./education-item";
import educations from "./education-data";

const Education: React.FC = () => {
  return (
    <>
      <h2>Higher Education</h2>
      {educations.map(education => (
        <EducationItem key={education.title} education={education} />
      ))}
    </>
  );
};

export default Education;

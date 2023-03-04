import React from "react";
import { Row } from "components/containers";
import styled from "styled-components";
import { Education } from "./education-data";

interface Props {
  education: Education;
}

const Title = styled(Row)`
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Description = styled.p`
  max-width: 600px;
`;

const Section = styled.section`
  margin: 20px 0px;
`;

const EducationItem: React.FC<Props> = ({ education }) => {
  return (
    <Section>
      <Title>
        <h4>
          {education.title} at{" "}
          <a target="_blank" href={education.school.link}>
            {education.school.name}
          </a>
        </h4>
        <span>{education.years}</span>
      </Title>
      <Description>{education.description}</Description>
    </Section>
  );
};

export default EducationItem;

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
        <strong>
          {education.title} at{" "}
          <a href={education.school.link}>{education.school.name}</a>
        </strong>
        <span>{education.years}</span>
      </Title>
      <Description>{education.description}</Description>
    </Section>
  );
};

export default EducationItem;

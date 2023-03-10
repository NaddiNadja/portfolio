import React from "react";
import { Row } from "components/containers";
import styled from "styled-components";
import { Education } from "./education-data";

interface Props {
  education: Education;
}

const Title = styled(Row)`
  justify-content: space-between;
`;

const Description = styled.p`
  max-width: 600px;
`;

const Year = styled.span`
  font-size: 14px;
`;

const Section = styled.section`
  margin: 20px 0px 20px 10px;
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
        <Year>{education.years}</Year>
      </Title>
      <Description>{education.description}</Description>
    </Section>
  );
};

export default EducationItem;

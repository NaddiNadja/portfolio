import React from "react";
import { Row } from "components/containers";
import styled from "styled-components";
import { Company } from "./experience-data";

interface Props {
  company: Company;
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

const ExperienceItem: React.FC<Props> = ({ company }) => {
  return (
    <>
      <h3>
        <a href={company.link} target="_blank">
          {company.name}
        </a>
      </h3>
      {company.jobs.map((experience, i) => (
        <Section key={i}>
          <Title>
            <h4>{experience.title}</h4>
            <Year>{experience.years}</Year>
          </Title>
          <Description>{experience.description}</Description>
        </Section>
      ))}
    </>
  );
};

export default ExperienceItem;

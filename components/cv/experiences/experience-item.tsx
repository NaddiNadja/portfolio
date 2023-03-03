import React from "react";
import { Row } from "components/containers";
import styled from "styled-components";
import { Company } from "./experience-data";

interface Props {
  company: Company;
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

const ExperienceItem: React.FC<Props> = ({ company }) => {
  return (
    <Section>
      <h3>
        <a href={company.link}>{company.name}</a>
      </h3>
      {company.jobs.map((experience, i) => (
        <Section key={i}>
          <Title>
            <strong>{experience.title}</strong>
            <span>{experience.years}</span>
          </Title>
          <Description>{experience.description}</Description>
        </Section>
      ))}
    </Section>
  );
};

export default ExperienceItem;

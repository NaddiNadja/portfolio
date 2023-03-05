import React from "react";
import { Column, Row } from "components/containers";
import GithubIcon from "./socials/github-icon";
import styled from "styled-components";
import Link from "next/link";
import LinkedinIcon from "./socials/linkedin-icon";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const SocialsLink = styled(Link)`
  aspect-ratio: 1;
  height: 25px;
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <Content>
        <Column>
          <strong>Contact</strong>
          <span>naddinadja@outlook.com</span>
        </Column>
        <Row>
          <SocialsLink target="_blank" href="https://github.com/NaddiNadja">
            <GithubIcon />
          </SocialsLink>
          <SocialsLink
            target="_blank"
            href="https://www.linkedin.com/in/nadjabrixkoch/"
          >
            <LinkedinIcon />
          </SocialsLink>
        </Row>
      </Content>
    </footer>
  );
};

export default Footer;

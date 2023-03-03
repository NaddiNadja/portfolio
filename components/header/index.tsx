import React from "react";
import { Row } from "components/containers";
import styled from "styled-components";
import Link from "next/link";

const Content = styled(Row)`
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Name = styled.span`
  text-transform: uppercase;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: row;
  margin: 0px 20px;
`;

const Header: React.FC = () => {
  return (
    <header>
      <Content>
        <Name>Nadja Brix Koch</Name>
        <Navigation>
          <Link href="/">CV</Link>
          <Link href="/tic-tac-toe">Tic Tac Toe</Link>
        </Navigation>
      </Content>
    </header>
  );
};

export default Header;

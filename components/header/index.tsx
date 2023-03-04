import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { OptionContainer, Select } from "./menu-dropdown";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  const [open, setOpen] = React.useState(false);

  return (
    <header>
      <Content>
        <Name>Nadja Brix Koch</Name>
        <Navigation>
          <Select onClick={() => setOpen(prev => !prev)}>
            <Name>Games</Name>
            <OptionContainer open={open}>
              <Link href="/tic-tac-toe">Tic Tac Toe</Link>
              <Link href="/bubble-game">Bubble game</Link>
            </OptionContainer>
          </Select>
          <Link href="/">CV</Link>
        </Navigation>
      </Content>
    </header>
  );
};

export default Header;

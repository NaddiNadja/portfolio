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

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: row;
`;

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
    if (!open) setTimeout(() => setOpen(false), 4000);
  };

  return (
    <header>
      <Content>
        <Navigation>
          <Link href="/">Nadja Brix Koch</Link>
        </Navigation>
        <Navigation>
          <Select onClick={handleOpen}>
            <span>Games</span>
            <OptionContainer open={open}>
              <Link href="/bubble-game">Bubble game</Link>
              <Link href="/tic-tac-toe">Tic Tac Toe</Link>
            </OptionContainer>
          </Select>
          <Link href="/cv">CV</Link>
        </Navigation>
      </Content>
    </header>
  );
};

export default Header;

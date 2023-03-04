import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { OptionContainer, OptionTitle, Select } from "./menu-dropdown";

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
  align-items: center;
`;

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout>();

  const handleOpen = () => {
    setOpen(prev => !prev);
    if (!open) {
      setTimeoutId(setTimeout(() => setOpen(false), 4000));
    } else {
      clearTimeout(timeoutId);
    }
  };

  return (
    <header>
      <Content>
        <Navigation id="left-nav">
          <Link href="/">Nadja Brix Koch</Link>
        </Navigation>
        <Navigation id="right-nav">
          <Link href="/cv">CV</Link>
          <Select onClick={handleOpen}>
            <OptionTitle open={open}>
              <span>Games</span>
            </OptionTitle>
            <OptionContainer open={open}>
              <Link href="/bubble-game">Bubble game</Link>
              <Link href="/tic-tac-toe">Tic Tac Toe</Link>
            </OptionContainer>
          </Select>
        </Navigation>
      </Content>
    </header>
  );
};

export default Header;

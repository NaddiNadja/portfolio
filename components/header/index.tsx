import React from "react";
import styled from "styled-components";
import Link from "next/link";
import MenuDropdown from "./menu-dropdown";

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
  return (
    <header>
      <Content>
        <Navigation id="left-nav">
          <Link href="/">Nadja Brix Koch</Link>
        </Navigation>
        <Navigation id="right-nav">
          <Link href="/cv">CV</Link>
          <MenuDropdown title="Projects">
            <Link href="/diary">Digital diary</Link>
            <Link href="/portfolio">Portfolio</Link>
          </MenuDropdown>
          <MenuDropdown title="Games">
            <Link href="/bubble-game">Bubble game</Link>
            <Link href="/tic-tac-toe">Tic Tac Toe</Link>
          </MenuDropdown>
        </Navigation>
      </Content>
    </header>
  );
};

export default Header;

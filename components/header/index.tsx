import React from "react";
import styled from "styled-components";
import Link from "next/link";
import RightNav from "./right-nav";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const NavigationLeft = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <header>
      <Content>
        <NavigationLeft>
          <Link href="/">Nadja Brix Koch</Link>
        </NavigationLeft>
        <RightNav />
      </Content>
    </header>
  );
};

export default Header;

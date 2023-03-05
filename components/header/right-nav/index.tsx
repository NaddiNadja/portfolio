import React from "react";
import styled from "styled-components";
import Link from "next/link";
import MenuDropdown from "../menu-dropdown";
import rightNavItems from "./right-nav-items";

const NavigationRow = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavigationColumn = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;

const RightNav: React.FC = () => {
  return (
    <>
      <NavigationRow>
        {rightNavItems.map(({ title, href, children }, i) =>
          children ? (
            <MenuDropdown key={i} title={title}>
              {children.map(({ title, href }, i) => (
                <Link href={href} key={i}>
                  {title}
                </Link>
              ))}
            </MenuDropdown>
          ) : (
            <Link href={href} key={i}>
              {title}
            </Link>
          )
        )}
      </NavigationRow>
      <MenuDropdown title="Menu">
        <NavigationColumn>
          {rightNavItems.map(({ title, href, children }, i) =>
            children ? (
              <>
                <h5>{title}</h5>
                {children.map(({ title, href }, i) => (
                  <Link href={href} key={i}>
                    {title}
                  </Link>
                ))}
              </>
            ) : (
              <Link href={href} key={i}>
                {title}
              </Link>
            )
          )}
        </NavigationColumn>
      </MenuDropdown>
    </>
  );
};

export default RightNav;

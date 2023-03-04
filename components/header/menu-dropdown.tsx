import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
}

export const OptionContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 0px;
  padding: 10px;
  background-color: var(--contrast);
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  visibility: ${(p: ModalProps) => (p.open ? "visible" : "hidden")};
  opacity: ${(p: ModalProps) => (p.open ? "1" : "0")};
  transition: opacity 0.3s linear, visibility 0.3s;
`;

const Title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Arrow = styled.span`
  padding-bottom: 5px;
  transform: ${(p: { open: boolean }) =>
    p.open ? "rotate(0deg)" : "rotate(-180deg)"};
  transition: transform 0.3s;
`;

export const OptionTitle: React.FC<PropsWithChildren<{ open: boolean }>> = ({
  children,
  open,
}) => {
  return (
    <Title>
      {children}
      <Arrow open={open}>∧</Arrow>
    </Title>
  );
};

export const Select = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0px 10px;
  text-transform: uppercase;
`;

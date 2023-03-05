import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

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

const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0px 10px;
  text-transform: uppercase;
`;

const MenuDropdown: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
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
    <SelectContainer onClick={handleOpen}>
      <Title>
        <span>{title}</span>
        <Arrow open={open}>∧</Arrow>
      </Title>
      <OptionContainer open={open}>{children}</OptionContainer>
    </SelectContainer>
  );
};

export default MenuDropdown;

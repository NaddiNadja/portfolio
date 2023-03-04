import styled from "styled-components";

interface ModalProps {
  open: boolean;
}

export const OptionContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  padding: 10px 0px;
  background-color: white;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  visibility: ${(p: ModalProps) => (p.open ? "visible" : "hidden")};
  opacity: ${(p: ModalProps) => (p.open ? "1" : "0")};
  transition: opacity 0.3s linear, visibility 0.3s;
`;

export const Select = styled.div`
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
`;

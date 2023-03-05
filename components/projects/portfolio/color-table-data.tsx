import React from "react";
import styled from "styled-components";
import { calcAPCA } from "apca-w3";

interface Props {
  variableName: string;
  note: string;
}

const Box = styled.div`
  width: 80%;
  height: 30px;
  background-color: ${({ variableName }: Props) => `var(${variableName})`};
  border-radius: 10px;
  color: ${({ variableName }: Props) =>
    variableName === "--beige" ? `var(--text)` : `var(--contrast)`};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorTableData = ({ variableName, note }: Props) => {
  const [value, setValue] = React.useState<string>("");
  const [wcag, setWcag] = React.useState<number>(0);
  const [acpa, setAcpa] = React.useState<number>(0);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const value = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(variableName);
      setValue(value);
      fetch(
        `https://webaim.org/resources/contrastchecker/?fcolor=${value.substring(
          1
        )}&bcolor=FFFFFF&api`
      )
        .then(res => res.json())
        .then(res => setWcag(res.ratio));
      const Lc = calcAPCA(value, "#ffffff");
      if (typeof Lc === "number") setAcpa(Lc);
    }
  }, [variableName]);

  return [
    <Box key="box" variableName={variableName} note={note}>
      {value}
    </Box>,
    wcag + " : 1",
    Math.round(acpa * 100) / 100 + " Lc",
    note,
  ];
};

export default ColorTableData;

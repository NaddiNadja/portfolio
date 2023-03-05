import React from "react";
import styled from "styled-components";

interface Props {
  variableName: string;
}

const Box = styled.div`
  width: 100%;
  aspect-ratio: 16/7;
  background-color: ${({ variableName }: Props) => `var(${variableName})`};
  border-radius: 10px;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorPaletteBox: React.FC<Props> = ({ variableName }) => {
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    if (typeof window !== "undefined")
      setValue(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(variableName)
      );
  }, [variableName]);

  return <Box variableName={variableName}>{value}</Box>;
};

export default ColorPaletteBox;

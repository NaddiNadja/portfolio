import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Column, Row } from "components/containers";

interface Props {
  imageElement: React.ReactNode;
  position: "left" | "right";
  widths?: {
    description: string;
    image: string;
  };
}

const StyledRow = styled(Row)`
  margin: 40px 0;
  gap: 30px;
  flex-direction: ${(p: { rowReverse?: boolean }) =>
    p.rowReverse ? "row-reverse" : "row"};
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const DescriptionColumn = styled(Column)`
  width: ${(p: { width?: string }) => (p.width ? p.width : "60%")};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ImageColumn = styled(Column)`
  width: ${(p: { width?: string }) => (p.width ? p.width : "40%")};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ImageRow: React.FC<PropsWithChildren<Props>> = ({
  imageElement,
  position,
  widths,
  children,
}) => {
  return (
    <StyledRow rowReverse={position === "right"}>
      <ImageColumn width={widths?.image}>{imageElement}</ImageColumn>
      <DescriptionColumn width={widths?.description}>
        {children}
      </DescriptionColumn>
    </StyledRow>
  );
};

export default ImageRow;

import React from "react";
import ColorTableData from "./color-table-data";
import Table from "components/table";
import styled from "styled-components";

const Scrollable = styled.div`
  overflow-x: auto;
`;

const Accessibility: React.FC = () => {
  const colorData = [
    {
      variableName: "--beige",
      note: "Not used for text.",
    },
    { variableName: "--yellow", note: "Used for the largest headings." },
    { variableName: "--red", note: "Used for large headings." },
    { variableName: "--blue", note: "Used medium headings and links." },
    {
      variableName: "--primary",
      note: "Used for small headings.",
    },
  ];
  return (
    <>
      <h2>Design and accessibility</h2>
      <p>
        I am in no way a designer and I am also new to accessibility, but I do
        find it important to be able to create designs that don&apos;t
        compromise the accessibility of a site. I have tried to create a color
        palette for my site that introduce a pop of color while still being
        accessible. The contrast ratios for all colors against a white
        background are tested with{" "}
        <a href="https://webaim.org/resources/contrastchecker/" target="_blank">
          WCAG 2
        </a>{" "}
        and{" "}
        <a href="https://www.myndex.com/APCA/" target="_blank">
          ACPA
        </a>{" "}
        calculators.
      </p>
      <Scrollable>
        <Table
          data={{
            headers: [
              "Color",
              "Contrast ratio (WCAG 2)",
              "Contrast (ACPA)",
              "Usage for text",
            ],
            rows: colorData.map(variable => ({
              data: ColorTableData(variable),
            })),
            widths: ["22%", "22%", "22%", "34%"],
          }}
          minWidth="690px"
        />
      </Scrollable>
      <p></p>
    </>
  );
};

export default Accessibility;

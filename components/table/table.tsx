import styled from "styled-components";

const TableContainer = styled.table`
  min-width: ${(props: { minWidth?: string }) => props.minWidth || "100%"};
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  margin: 10px 0px 20px 0px;
`;

export default TableContainer;

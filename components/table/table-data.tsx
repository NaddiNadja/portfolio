import styled from "styled-components";

const TableData = styled.td`
  padding: 14px 26px;
  width: ${({ width }: { width?: string }) => width};
`;

export default TableData;

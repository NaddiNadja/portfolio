import styled from "styled-components";

const TableRow = styled.tr`
  width: 100%;
  border-top: 1px solid var(--grey);
  &:last-of-type {
    border-bottom: 1px solid var(--grey);
  }
  &:first-of-type {
    border-top: none;
  }
`;

export default TableRow;

import styled from "styled-components";

const Board = styled.div`
  max-width: 700px;
  width: 100%;
  aspect-ratio: 11/12;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 5px;
  align-self: center;
  opacity: ${(p: { endMessage?: string }) => (p.endMessage ? 0.3 : 1)};
  margin-bottom: 20px;
`;

export default Board;

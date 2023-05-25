import styled from "styled-components";

const StyleInfoCardAttributes = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  width: max-content;
  border-radius: var(--br-lg);
  padding: 10px 12px;
  display: grid;
  column-gap: 15px;
  align-items: center;
`;

export { StyleInfoCardAttributes };

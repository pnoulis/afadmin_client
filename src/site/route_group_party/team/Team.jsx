import * as React from "react";
import styled from "styled-components";

function Team({ children }) {
  return <StyleTeam>{children}</StyleTeam>;
}

const StyleTeam = styled.article`
  background-color: var(--grey-light);
  border-radius: var(--br-lg);
  padding: 25px;
  box-shadow: var(--sd-7);
`;

export { Team };

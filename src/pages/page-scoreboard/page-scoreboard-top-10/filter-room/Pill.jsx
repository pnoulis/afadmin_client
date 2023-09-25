// ------------------------------ std libs ------------------------------- / /
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

function Pill({ onClick: handleClick, className, style, children }) {
  return <StyledPill onClick={handleClick}>{children}</StyledPill>;
}

const StyledPill = styled("li")`
  flex: 0 0 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: white;
  color: black;
  border-radius: var(--br-nl);
  font-family: Saira;
  font-weight: 550;
  font-size: var(--tx-xs);
  text-transform: uppercase;
  cursor: pointer;
`;

export { Pill };

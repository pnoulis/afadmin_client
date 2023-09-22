// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

function Filter({ handleOnFilter, children }) {
  return <StyledFilter onClick={handleOnFilter}>{children}</StyledFilter>;
}

const StyledFilter = styled("li")`
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ bcolor }) => bcolor || "var(--grey-base)"};
  &:hover {
    opacity: 0.8;
  }
`;

export { Filter };

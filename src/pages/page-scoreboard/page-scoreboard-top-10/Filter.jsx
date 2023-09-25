// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //


function Filter({ className, style, handleOnFilter, children }) {
  return (
    <StyledFilter className={className} style={style} onClick={handleOnFilter}>
      {children}
    </StyledFilter>
  );
}

const StyledFilter = styled("li")`
  // cursor: pointer;
  // display: flex;
  // box-sizing: border-box;
  // justify-content: center;
  // align-items: center;
  // width: ${({ size }) => size || "50px"};
  // height: ${({ size }) => size || "50px"};
  // border: 3px solid transparent;
  // padding: 4px;
  // border-radius: var(--br-nl);
  // background-color: ${({ bcolor }) => bcolor || "var(--grey-base)"};
  // &:hover {
  //   opacity: 0.8;
  // }
`;

export { Filter };

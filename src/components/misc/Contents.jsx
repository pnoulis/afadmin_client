// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

function Contents({ id, className, children }) {
  return (
    <StyledContents id={id} className={`contents ${className}`}>
      {children}
    </StyledContents>
  );
}

const StyledContents = styled("div")`
  display: contents;
`;

export { Contents };

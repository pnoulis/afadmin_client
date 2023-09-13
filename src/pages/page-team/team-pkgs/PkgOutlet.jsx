// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ConfigurePackage } from "./ConfigurePackage.jsx";

function PkgOutlet({ style, className }) {
  return (
    <StyledPkgOutlet className={className} style={style}>
      <ConfigurePackage />
    </StyledPkgOutlet>
  );
}

const StyledPkgOutlet = styled("section")`
  display: flex;
  justify-content: space-between;
`;

export { PkgOutlet };

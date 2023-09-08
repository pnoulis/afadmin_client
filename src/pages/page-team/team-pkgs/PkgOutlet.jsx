// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ConfigurePackage } from "./ConfigurePackage.jsx";

function PkgOutlet({ state, outlet, style, className }) {
  switch (outlet) {
    case "packages":
      return (
        <StyledPkgOutlet className={className} style={style}>
          <ConfigurePackage />
        </StyledPkgOutlet>
      );
    default:
      throw new Error(`Unmatched pkg outlet: ${outlet}`);
  }
}

const StyledPkgOutlet = styled("section")`
  display: flex;
  justify-content: space-between;
`;

export { PkgOutlet };

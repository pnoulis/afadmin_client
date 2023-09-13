// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { WidgetArrow } from "/src/components/widgets/index.js";
import { useContextPkgActionRouter } from "../PkgActionRouter.jsx";
import {
  PkgTupleCost,
  StylePkgTupleCost,
} from "/src/components/packages/index.js";
import { WidgetSave } from "/src/components/widgets/index.js";
import { useContextTeam, useContextPackage } from "/src/contexts/index.js";

function PkgsToolbarPkgConfig() {
  const ctxRouter = useContextPkgActionRouter();
  const ctxTeam = useContextTeam();
  const ctxPkg = useContextPackage();
  debug(ctxPkg, "debug pkgsToolbarPkgConfig");
  return (
    <StyledPkgsToolbarPkgConfig>
      <StyledPkgInfo>
        <StylePkgTupleCost>
          <PkgTupleCost />
        </StylePkgTupleCost>
      </StyledPkgInfo>
      <WidgetSave
        as="li"
        tooltipContent="register package"
        style={{ marginLeft: "auto" }}
        onClick={ctxPkg.handlePkgRegistration}
      />
      <WidgetArrow
        as="li"
        tooltipContent="back"
        onClick={() => {
          if (ctxTeam.team.packages.length > 0) {
            ctxPkg.handleSelectedPkgClear();
            ctxRouter.back();
          }
        }}
      />
    </StyledPkgsToolbarPkgConfig>
  );
}

const StyledPkgInfo = styled("li")`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  height: 100%;
  min-width: 200px;
  background-color: var(--grey-light);
  width: max-content;
  border-radius: var(--br-nl);
  padding: 10px 20px;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
`;

const StyledPkgsToolbarPkgConfig = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  height: 70px;
`;

export { PkgsToolbarPkgConfig };

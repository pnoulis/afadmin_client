// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import {
  WidgetPlus,
  WidgetTrash,
  WidgetStart,
} from "/src/components/widgets/index.js";
import { useContextPkgActionRouter } from "../PkgActionRouter.jsx";
import { useContextPackage } from "/src/contexts/index.js";

function PkgsToolbarRootView({ className, style }) {
  const routerCtx = useContextPkgActionRouter();
  const ctxPkg = useContextPackage();
  return (
    <StyledPkgsToolbarRootView className={className} style={style}>
      <StyledWidgetPlus
        forwardedAs="li"
        tooltipContent="add package"
        onClick={() => {
          ctxPkg.handleSelectedPkgClear();
          routerCtx.forward("pkgconfig");
        }}
      />
      <StyledWidgetTrash
        forwardedAs="li"
        tooltipContent="remove package"
        onClick={ctxPkg.handlePkgRemoval}
      />
      <WidgetStart
        style={{
          width: "50px",
          height: "50px",
        }}
        as="li"
        tooltipContent="activate package"
        onClick={() => {
          ctxPkg.handlePkgActivation();
        }}
      />
    </StyledPkgsToolbarRootView>
  );
}

const StyledPkgsToolbarRootView = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
  justify-content: start;
  min-height: 70px;
`;

const StyledWidgetPlus = styled(WidgetPlus)`
  background-color: var(--primary-base);
  width: 50px;
  height: 50px;
  svg {
    fill: white;
  }
`;
const StyledWidgetTrash = styled(WidgetTrash)`
  background-color: var(--primary-base);
  width: 50px;
  height: 50px;

  svg {
    fill: white;
  }
`;

export { PkgsToolbarRootView };

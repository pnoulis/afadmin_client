// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { useContextTeam, useContextPackage } from "/src/contexts/index.js";
import {
  PkgInfoCard,
  StyledPkgInfoCardTuple,
  Package,
} from "/src/components/packages/index.js";
import { AncestorDimensions } from "react_utils/misc";

function PkgsOutletRootView() {
  const ctxTeam = useContextTeam();
  const ctxPkg = useContextPackage();

  return (
    <StyledPkgsOutletRootView id="yolo">
      <AncestorDimensions ancestor="#yolo">
        <StyledListPkgs>
          {ctxTeam.team.packages.map((pkg, i) => (
            <Package pkg={pkg} key={i}>
              <StyledListPkgsItem
                forwardedAs="li"
                onClick={ctxPkg.handlePkgSelection.bind(null, pkg)}
              />
            </Package>
          ))}
        </StyledListPkgs>
      </AncestorDimensions>
    </StyledPkgsOutletRootView>
  );
}

const StyledPkgsOutletRootView = styled("div")`
  height: 100%;
`;
const StyledListPkgs = styled("ul")`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  overflow-y: auto;
  overflow-x: none;
  align-items: center;
  scroll-behavior: smooth;
  max-height: ${({ $height }) => $height + "px"};
  row-gap: 40px;
  scrollbar-color: black var(--primary-base);
  scrollbar-gutter: stable both-edges;
`;

const StyledListPkgsItem = styled(PkgInfoCard)`
  &:hover {
    cursor: pointer;
    background-color: var(--info-subtle);
  }

  &:hover ${StyledPkgInfoCardTuple}.state .value {
    color: white;
  }

  &:active {
    background-color: hsl(var(--base-info), 83%);
  }
`;

export { PkgsOutletRootView };

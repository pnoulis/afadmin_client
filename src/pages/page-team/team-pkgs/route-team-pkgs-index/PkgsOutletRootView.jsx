// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled, { css } from "styled-components";
// ------------------------------ project  ------------------------------- //
import { useContextTeam, useContextPackage } from "/src/contexts/index.js";
import {
  PkgInfoCard,
  StyledPkgInfoCardTuple,
  Package,
} from "/src/components/packages/index.js";
import { AncestorDimensions } from "react_utils/misc";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { renderDialog, Alert } from "/src/components/dialogs/index.js";
import { displaypoperr } from "/src/utils/index.js";
import { useContextPkgActionRouter } from "../PkgActionRouter";

function PkgsOutletRootView() {
  const ctxRouter = useContextPkgActionRouter();
  const ctxTeam = useContextTeam();
  const ctxPkg = useContextPackage();

  debug(ctxPkg, "context pkg");

  React.useLayoutEffect(() => {
    if (
      ctxTeam.team.packages.length < 1 &&
      ctxRouter.current()?.name !== "pkgconfig"
    ) {
      ctxRouter.forward("pkgconfig");
    }
    // if (
    //   ctxTeam.team.packages.length < 1 &&
    //   ctxRouter.current()?.name !== "pkgconfig"
    // ) {
    //   ctxRouter.forward("pkgconfig");
    // } else if (!ctxPkg.selectedPkg && ctxTeam.team.packages.length >= 1) {
    //   ctxPkg.handlePkgSelection(ctxTeam.team.packages[0]);
    // }
  }, [ctxPkg.selectedPkg, ctxTeam.team.packages.length]);

  return (
    <>
      <PopoverAsyncState
        timePending={500}
        action={ctxTeam.sRemovePackage}
        onSettled={(removed, response) => {
          if (removed) {
            renderDialog(
              null,
              Alert,
              {
                title: "remove package",
                msg: `successfuly removed ${response.type} package: ${response.name}`,
              },
              () => {
                if (ctxTeam.team.packages.length < 1) {
                  ctxRouter.forward("pkgconfig");
                }
              },
            );
          } else {
            displaypoperr(response);
          }
        }}
      />

      <PopoverAsyncState
        timePending={500}
        action={ctxTeam.sActivatePackage}
        onSettled={(activated, response) => {
          if (activated) {
            renderDialog(null, Alert, {
              title: "activate package",
              msg: `successfuly activated ${response.type} package: ${response.name}`,
            });
          } else {
            displaypoperr(response);
          }
        }}
      />
      <StyledPkgsOutletRootView id="scrollarea-outlet-root-view">
        <AncestorDimensions ancestor="#scrollarea-outlet-root-view">
          <StyledListPkgs>
            {ctxTeam.team.packages
              .sort((a, b) => (a.state === "playing" ? -1 : 1))
              .map((pkg, i) => (
                <Package pkg={pkg} key={i}>
                  <StyledListPkgsItem
                    playing={pkg.state === "playing"}
                    selected={pkg.id === ctxPkg.selectedPkg?.id}
                    forwardedAs="li"
                    onClick={
                      pkg.state === "playing"
                        ? () => {}
                        : ctxPkg.handlePkgSelection.bind(null, pkg)
                    }
                  />
                </Package>
              ))}
          </StyledListPkgs>
        </AncestorDimensions>
      </StyledPkgsOutletRootView>
    </>
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
  ${({ selected, playing }) => {
    if (playing) {
      return css`
        background-color: var(--success-base);
      `;
    } else if (selected) {
      return css`
        background-color: var(--secondary-base);
        cursor: pointer;
        ${StyledPkgInfoCardTuple}.state .value {
          color: white !important;
        }
      `;
    } else {
      return css`
        cursor: pointer;
        &:hover {
          background-color: var(--secondary-light);
          ${StyledPkgInfoCardTuple}.state .value {
            color: white !important;
          }
        }
      `;
    }
  }}
`;

export { PkgsOutletRootView };

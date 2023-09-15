// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { useContextTeam, useContextPackage } from "/src/contexts/index.js";
import { RoutePkgConfig } from "../PkgActionRoutes.jsx";
import { AwaitPackages } from "./AwaitPackages.jsx";
import { PkgsToolbarPkgConfig } from "./PkgsToolbarPkgConfig.jsx";
import { PackageConfiguratorCard } from "/src/components/packages/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { renderDialog, Alert } from "/src/components/dialogs/index.js";
import { displaypoperr } from "/src/utils/index.js";
import { useContextPkgActionRouter } from "../PkgActionRouter.jsx";

function PkgsOutletPkgConfig() {
  const ctxTeam = useContextTeam();
  const ctxPkg = useContextPackage();
  const ctxRouter = useContextPkgActionRouter();
  return (
    <>
      <PopoverAsyncState
        timePending={500}
        action={ctxTeam.sRegisterPackage}
        onSettled={(registered, response) => {
          if (registered) {
            ctxRouter.back();
            renderDialog(null, Alert, {
              title: "register new package",
              msg: `Successfuly registered new ${response.type} package: ${response.name}`,
            });
          } else {
            displaypoperr(response);
          }
        }}
      />
      <RoutePkgConfig target="pkgs-arouter-toolbar-mp">
        <PkgsToolbarPkgConfig />
      </RoutePkgConfig>
      <StyledPkgsOutletPkgConfig key={ctxPkg.vid}>
        <AwaitPackages>
          {(pkgs) => (
            <StyledListPackages>
              {pkgs.map((pkg, i) => (
                <PackageConfiguratorCard
                  as="li"
                  key={i}
                  pkg={pkg}
                  selected={ctxPkg.selectedPkg?.type === pkg.type}
                  onSelect={ctxPkg.handlePkgSelection}
                />
              ))}
            </StyledListPackages>
          )}
        </AwaitPackages>
      </StyledPkgsOutletPkgConfig>
    </>
  );
}
const StyledListPackages = styled("ul")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
  gap: 40px;
`;
const StyledPkgsOutletPkgConfig = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PkgsOutletPkgConfig };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import styled from "styled-components";
// ------------------------------ project  ------------------------------- //
import { useContextTeam, ContextProvidePackage } from "/src/contexts/index.js";
import { usePackageConfigurator } from "/src/components/packages/index.js";
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
  const ctxPkg = usePackageConfigurator(ctxTeam);
  const ctxRouter = useContextPkgActionRouter();
  debug(ctxPkg.pkg, "debug use package return");
  return (
    <>
      <PopoverAsyncState
        timePending={500}
        action={ctxTeam.sRegisterPackage}
        onSettled={(registered, response) => {
          if (registered) {
            renderDialog(
              null,
              Alert,
              {
                title: "register new package",
                msg: "Successfully registered new package",
              },
              () => {
                ctxRouter.back();
              },
            );
          } else {
            displaypoperr(response);
          }
        }}
      />
      <ContextProvidePackage ctx={ctxPkg}>
        <RoutePkgConfig target="pkgs-arouter-toolbar-mp">
          <PkgsToolbarPkgConfig />
        </RoutePkgConfig>
        <StyledPkgsOutletPkgConfig>
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
      </ContextProvidePackage>
    </>
  );
}
const StyledListPackages = styled("ul")`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;
const StyledPkgsOutletPkgConfig = styled("div")`
  width: 100%;
  height: 100%;
`;

export { PkgsOutletPkgConfig };

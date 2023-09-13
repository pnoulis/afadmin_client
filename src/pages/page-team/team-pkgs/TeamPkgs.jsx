// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  ContextProvidePkgActionRouter,
  usePkgActionRouter,
  PkgActionRouterMountPoint,
} from "./PkgActionRouter.jsx";
import { RoutePkgRoot, RoutePkgConfig } from "./PkgActionRoutes.jsx";
import { PkgsToolbarRootView } from "./route-team-pkgs-index/PkgsToolbarRootView.jsx";
import { PkgsOutletRootView } from "./route-team-pkgs-index/PkgsOutletRootView.jsx";
import { PkgsOutletPkgConfig } from "./route-team-pkgs-pkgconfig/PkgsOutletPkgConfig.jsx";
import { useContextTeam } from "/src/contexts/index.js";
import { usePackageConfigurator } from "/src/components/packages/index.js";
import { ContextProvidePackage } from "/src/contexts/index.js";

function TeamPkgs() {
  const ctxRouter = usePkgActionRouter();
  const ctxTeam = useContextTeam();
  const ctxPkg = usePackageConfigurator(ctxTeam);

  return (
    <ContextProvidePkgActionRouter ctx={ctxRouter}>
      <ContextProvidePackage ctx={ctxPkg}>
        <StyledTeamPkgs>
          <section className="pkgs-toolbar">
            <PkgActionRouterMountPoint id="pkgs-arouter-toolbar-mp">
              <RoutePkgRoot>
                <PkgsToolbarRootView />
              </RoutePkgRoot>
            </PkgActionRouterMountPoint>
          </section>
          <section className="pkgs-outlet">
            <RoutePkgRoot>
              <PkgsOutletRootView />
            </RoutePkgRoot>
            <RoutePkgConfig>
              <PkgsOutletPkgConfig />
            </RoutePkgConfig>
          </section>
        </StyledTeamPkgs>
      </ContextProvidePackage>
    </ContextProvidePkgActionRouter>
  );
}

const StyledTeamPkgs = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  gap: 60px;

  .pkgs-toolbar {
    width: 100%;
  }
  .pkgs-outlet {
    flex: 1;
    width: 100%;
  }
`;

export { TeamPkgs };

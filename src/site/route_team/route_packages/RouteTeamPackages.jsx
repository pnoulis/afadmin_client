import * as React from "react";
import styled from "styled-components";
import { TeamPackagesControls } from "./team_packages_controls/TeamPackagesControls.jsx";
import { ListPackages } from "./list_packages/ListPackages.jsx";
import { SelectPackage } from "./select_package/SelectPackage.jsx";
import { ConfigurePackage } from "./configure_package/ConfigurePackage.jsx";
import { useCtxTeam, ProvideStoreTeamPackages } from "/src/stores/index.js";

const StyleRouteTeamPackages = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr 1fr;
  grid-template-columns: minmax(450px, max-content) 1fr;
  grid-template-areas:
    "team_packages_controls team_packages_controls"
    "list_packages select_package"
    "list_packages configure_package";
  row-gap: 15px;
  column-gap: 50px;
`;

const StyleTeamPackagesControls = styled(TeamPackagesControls)`
  grid-area: team_packages_controls;
`;
const StyleListPackages = styled(ListPackages)`
  grid-area: list_packages;
`;
const StyleSelectPackage = styled(SelectPackage)`
  grid-area: select_package;
`;
const StyleConfigurePackage = styled(ConfigurePackage)`
  grid-area: configure_package;
`;

function RouteTeamPackages() {
  const ctx = useCtxTeam();
  return (
    <ProvideStoreTeamPackages ctxTeam={ctx}>
      <StyleRouteTeamPackages>
        <StyleTeamPackagesControls />
        <StyleListPackages />
        <StyleSelectPackage />
        <StyleConfigurePackage />
      </StyleRouteTeamPackages>
    </ProvideStoreTeamPackages>
  );
}

export { RouteTeamPackages };

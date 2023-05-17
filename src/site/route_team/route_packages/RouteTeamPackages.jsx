import * as React from "react";
import styled from "styled-components";
// import { Header } from "./header/Header.jsx";
// import { ListPackages } from "./list_packages/ListPackages.jsx";
// import { ConfigurePackage } from "./configure_package/ConfigurePackage.jsx";

const StyleRouteTeamPackages = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 150px 1fr 1fr;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "header header"
    "list_packages select_package"
    "list_packages configure_package";
`;

// const StyleHeader = styled(Header)`
//   grid-area: header;
// `;

// const StyleListPackages = styled(ListPackages)`
//   grid-area: list_packages;
// `;

// const StyleConfigurePackage = styled(ConfigurePackage)`
// grid-area: configure_package";
// `;

function RouteTeamPackages() {
  return (
    <StyleRouteTeamPackages>
      {/* <StyleHeader /> */}
      {/* <StyleListPackages /> */}
      {/* <StyleConfigurePackage /> */}
    </StyleRouteTeamPackages>
  );
}

export { RouteTeamPackages };

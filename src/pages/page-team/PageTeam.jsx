// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePersistentTeam } from "/src/components/teams/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { TeamHeader } from "./TeamHeader.jsx";
import { TeamInfo } from "./team-info/TeamInfo.jsx";
import { TeamPkgs } from "./team-pkgs/TeamPkgs.jsx";
import { PanelTeam } from "./PanelTeam.jsx";
import { PanelActionRoute } from "/src/components/panels/index.js";
import { liveView } from "/src/links.jsx";

function PageTeam() {
  const { state } = useLocation();
  const ctxTeam = usePersistentTeam(state);
  const location = useLocation();

  return state == null ? (
    <Navigate to="/404" replace={true} />
  ) : (
    <ContextProvideTeam ctx={ctxTeam}>
      <PanelActionRoute
        path={location.pathname}
        target="panel-liveview-header-mount-point"
      >
        <PanelTeam />
      </PanelActionRoute>
      <StyledPageTeam>
        <section className="pkg_info" style={{ gridArea: "pkg_info" }}>
          <TeamPkgs />
        </section>
        <section className="team_info" style={{ gridArea: "team_info" }}>
          <TeamInfo />
        </section>
      </StyledPageTeam>
    </ContextProvideTeam>
  );
}

const StyledPageTeam = styled("div")`
  padding: 0 25px 25px 25px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "team_header team_header"
    "pkg_info team_info";
  gap: 70px 50px;
  justify-content: space-between;
`;

export { PageTeam };

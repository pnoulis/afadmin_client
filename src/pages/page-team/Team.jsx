// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePersistentTeam } from "/src/components/teams/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { TeamInfo } from "./team-info/TeamInfo.jsx";
import { TeamPkgs } from "./team-pkgs/TeamPkgs.jsx";
import { PanelTeam } from "./PanelTeam.jsx";
import { PanelActionRoute } from "/src/components/panels/index.js";
import { useAfmachineSubscription } from "/src/hooks/index.js";

function Team({ team }) {
  const ctxTeam = usePersistentTeam(team);
  return (
    <ContextProvideTeam ctx={ctxTeam}>
      <PanelActionRoute
        path={".*/" + team?.name}
        target="panel-liveview-header-mount-point"
      >
        <PanelTeam />
      </PanelActionRoute>
      <StyledTeam>
        <section className="pkg_info" style={{ gridArea: "pkg_info" }}>
          <TeamPkgs />
        </section>
        <section className="team_info" style={{ gridArea: "team_info" }}>
          <TeamInfo />
        </section>
      </StyledTeam>
    </ContextProvideTeam>
  );
}

const StyledTeam = styled("div")`
  padding: 0 50px 25px 50px;
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

export { Team };

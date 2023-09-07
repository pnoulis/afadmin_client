// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import {
  useLocation,
  useNavigate,
  Routes,
  Route,
  Router,
} from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePersistentTeam } from "/src/components/teams/index.js";
import { TeamPlayers } from "./TeamPlayers.jsx";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { ConfigurePackage } from "./ConfigurePackage.jsx";
import { PkgToolbar } from "./PkgToolbar.jsx";
import { TeamToolbar } from "./TeamToolbar.jsx";
import { TeamInfo } from "./TeamInfo.jsx";
import { Contents } from "/src/components/misc/index.js";
import { PkgOutlet } from "./PkgOutlet.jsx";
import { TeamOutlet } from "./TeamOutlet.jsx";

function PageTeam() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const ctxTeam = usePersistentTeam(state);
  const [pkgOutlet, setPkgOutlet] = React.useState("packages");
  const [teamOutlet, setTeamOutlet] = React.useState("roster");

  React.useLayoutEffect(() => {
    if (!state) {
      navigate("/404");
    }
  }, [state]);

  return (
    <ContextProvideTeam ctx={ctxTeam}>
      <StyledPageTeam>
        <TeamInfo style={{ gridArea: "team_info", justifySelf: "end" }} />
        <Contents className="toolbars">
          <PkgToolbar
            onOutletSelect={setPkgOutlet}
            style={{ gridArea: "pkg_toolbar" }}
          />
          <TeamToolbar
            onOutletSelect={setTeamOutlet}
            style={{ gridArea: "team_toolbar", justifySelf: "end" }}
          />
        </Contents>
        <PkgOutlet
          style={{ gridArea: "pkg_outlet" }}
          outlet={pkgOutlet}
          state={{ ctxTeam }}
        />
        <TeamOutlet
          style={{ gridArea: "team_outlet" }}
          outlet={teamOutlet}
          state={{ ctxTeam }}
        />
      </StyledPageTeam>
    </ContextProvideTeam>
  );
}

const StyledPageTeam = styled("div")`
  padding: 0 25px 25px 25px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "team_info team_info"
    "pkg_toolbar team_toolbar"
    "pkg_outlet team_outlet";

  .contents.toolbars > * {
    margin: 25px 5px 50px 5px;
  }
  justify-content: space-between;
`;

export { PageTeam };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePersistentTeam } from "/src/components/teams/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { TeamHeader } from "./TeamHeader.jsx";
import { TeamInfo } from "./team-info/TeamInfo.jsx";
import { TeamPkgs } from "./team-pkgs/TeamPkgs.jsx";
import { useContextHistoryToolbar } from "/src/components/history-toolbar/index.js";
import { PanelTeam } from "./PanelTeam.jsx";

function PageTeam() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const ctxTeam = usePersistentTeam(state);
  const { forward } = useContextHistoryToolbar();

  console.log(ctxTeam);
  React.useLayoutEffect(() => {
    if (!state) {
      navigate("/404");
    } else {
      forward(() => <PanelTeam ctxTeam={ctxTeam} />);
    }
  }, [state]);

  return (
    <ContextProvideTeam ctx={ctxTeam}>
      <StyledPageTeam>
        <section className="pkg_info" style={{ gridArea: "pkg_info" }}>
          <TeamPkgs />
        </section>
        <section className="team_info" style={{ gridArea: "team_info" }}>
          {/* <TeamInfo /> */}
        </section>
      </StyledPageTeam>
    </ContextProvideTeam>
  );
}

const StyledPageTeam = styled("div")`
  padding: 0 25px 10px 25px;
  background-color: yellow;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "team_header team_header"
    "pkg_info team_info";
  column-gap: 50px;
  justify-content: space-between;

  .team_info {
    background-color: red;
  }

  .pkg_info {
    background-color: blue;
  }
`;

export { PageTeam };

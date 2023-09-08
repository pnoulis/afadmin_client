// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction, isArray } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { TeamOutlet } from "./TeamOutlet.jsx";
import {
  HistoryToolbar,
  HistoryToolbarPopper,
  HistoryToolbarPusher,
  HistoryToolbarCtx,
} from "/src/components/history-toolbar/index.js";

function TeamInfo() {
  return (
    <StyledTeamInfo>
      <HistoryToolbar history={["roster"]}>
        <TeamToolbar />
        <HistoryToolbarCtx>
          {({ current }) => <TeamOutlet outlet={current} />}
        </HistoryToolbarCtx>
      </HistoryToolbar>
    </StyledTeamInfo>
  );
}

function TeamToolbar() {
  return (
    <div className="team-toolbar">
      team toolbar
      <HistoryToolbarPopper />
      <HistoryToolbarPusher next="roster" />
    </div>
  );
}

const StyledTeamInfo = styled("div")`
  width: 100%;
  height: 100%;
  background-color: brown;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "team_toolbar" "team_outlet";

  .team-toolbar {
    background-color: blue;
  }
  .team-outlet {
    background-color: pink;
  }
`;

export { TeamInfo };

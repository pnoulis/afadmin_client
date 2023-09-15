// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  ContextProvideTeamInfoActionRouter,
  TeamInfoActionRouter,
} from "./TeamInfoActionRouter.jsx";
import { RouteTeamInfoIndex } from "./TeamInfoActionRoutes.jsx";
import { useContextTeam } from "/src/contexts/index.js";
import { TeamInfoToolbarIndexRoute } from "./route-team-info-index/TeamInfoToolbarIndexRoute.jsx";
import { TeamInfoOutletIndexRoute } from "./route-team-info-index/TeamInfoOutletIndexRoute.jsx";

function TeamInfo() {
  const ctxTeam = useContextTeam();
  return (
    <TeamInfoActionRouter>
      <StyledTeamInfo>
        <section id="teaminfo-toolbar">
          <RouteTeamInfoIndex>
            <TeamInfoToolbarIndexRoute />
          </RouteTeamInfoIndex>
        </section>
        <section id="teaminfo-outlet">
          <RouteTeamInfoIndex>
            <TeamInfoOutletIndexRoute />
          </RouteTeamInfoIndex>
        </section>
      </StyledTeamInfo>
    </TeamInfoActionRouter>
  );
}

const StyledTeamInfo = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  gap: 20px;

  #teaminfo-toolbar {
    width: 100%;
  }
  #teaminfo-outlet {
    flex: 1;
    width: 100%;
  }
`;

export { TeamInfo };

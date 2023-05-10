import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/site/site_wide/index.js";
import { MergePanelHeader } from "./MergePanelHeader.jsx";
import { ProvideStoreMerge } from "/src/stores/index.js";
import styled from "styled-components";
import { SelectPlayer } from "./select_player/index.js";
import { TeamStagingArea } from "./team_staging_area/index.js";
import { CreateTeam } from "./create_team/index.js";

const RouteMergeLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  grid-template-areas: "player_selection team_staging_area";
`;

const StyleSelectPlayer = styled(SelectPlayer)`
  grid-area: player_selection;
`;

const StyleTeamStagingArea = styled(TeamStagingArea)`
  grid-area: team_staging_area;
`;
const StyleCreateTeam = styled(CreateTeam)`
  grid-area: create_team;
`;

function RouteMerge() {
  return (
    <PanelLayout>
      <PanelLayoutHeader>
        <MergePanelHeader />
      </PanelLayoutHeader>
      <PanelLayoutMain>
        <ProvideStoreMerge>
          <RouteMergeLayout>
            <StyleSelectPlayer />
            <StyleTeamStagingArea />
          </RouteMergeLayout>
        </ProvideStoreMerge>
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteMerge };

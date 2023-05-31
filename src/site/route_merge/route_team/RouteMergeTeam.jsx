import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as TeamIcon } from "agent_factory.shared/ui/icons/team_icon_fill.svg";
import { ListPlayers } from "./team_staging_area/ListPlayers.jsx";
import { ComboboxSelectPlayer } from "./select_player/ComboboxSelectPlayer.jsx";
import { useContextMerge } from "/src/stores/merge/index.js";

import { useLoaderData, Await } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const StyleMoonLoader = () => (
  <MoonLoader loading color="var(--info-strong)" size={100} />
);

function RouteMergeTeam({ className, ...props }) {
  const availablePlayersPromise = useLoaderData();
  const {
    players,
    handlePlayerSelection,
    handleWristbandPairToggle,
    handlePlayerRemoval,
  } = useContextMerge();

  return (
    <StyleRouteMergeTeam className={className} {...props}>
      <StyleSelectPlayer>
        <React.Suspense fallback={<StyleMoonLoader />}>
          <Await
            resolve={availablePlayersPromise.availablePlayers}
            errorElement={<p>error loading</p>}
          >
            {(availablePlayers) => (
              <ComboboxSelectPlayer
                players={availablePlayers}
                onPlayerSelect={handlePlayerSelection}
              />
            )}
          </Await>
        </React.Suspense>
      </StyleSelectPlayer>
      <StyleTeamStagingArea id="ancestor-team-staging-area">
        <ListPlayers
          players={players || []}
          onWristbandPairToggle={handleWristbandPairToggle}
          onPlayerRemove={handlePlayerRemoval}
        />
        <StyleTeamIcon>
          <Svg color="var(--primary-light)">
            <TeamIcon />
          </Svg>
        </StyleTeamIcon>
      </StyleTeamStagingArea>
    </StyleRouteMergeTeam>
  );
}

const StyleRouteMergeTeam = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "select_player team_staging_area";
  justify-items: start;
  justify-content: start;
  align-items: start;
`;

const StyleSelectPlayer = styled.section`
  grid-area: select_player;
  width: 100%;
  height: 100%;
  padding: 15px 0 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleTeamStagingArea = styled.section`
  grid-area: team_staging_area;
  width: 100%;
  height: 100%;
  max-width: 700px;
  margin: auto;
  background-color: var(--grey-base);
  padding: 15px 0 15px 15px;
  border-radius: var(--br-lg);
  position: relative;
`;

const StyleTeamIcon = styled.div`
  position: absolute;
  width: 30%;
  left: 50%;
  top: 50%;
  max-width: 400px;
  transform: translate(-45%, -40%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export { RouteMergeTeam };

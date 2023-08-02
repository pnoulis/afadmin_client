import * as React from "react";
import styled from "styled-components";
import { useAfmachineSubscription } from "/src/hooks/index.js";
import { RegistrationQueue } from "/src/components/registration_queue/index.js";
import { useLoaderData, Await } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { ComboboxSelectPlayer } from "/src/components/comboboxes/index.js";
import { useContextTeam } from "/src/contexts/index.js";
import { useContextApp } from "/src/contexts/index.js";
import { ComboboxOptionPlayer } from "../../route_registration/route_register_player_wristband/ComboboxOptionPlayer";
import { StyledFormTeamName } from "/src/components/forms/index.js";
import { StyledTeamTupleState } from "/src/components/teams/index.js";
import { PopoverAsyncState } from "/src/components/async/index.js";
import { useRevalidator } from "react-router-dom";

function RouteMergeTeam({ className, ...props }) {
  const {
    team,
    state,
    roster,
    addTeamPlayer,
    removeTeamPlayer,
    changeTeamName,
  } = useContextTeam();
  const loadPlayers = useLoaderData();
  const { searchPlayer } = useContextApp();
  const revalidator = useRevalidator();

  const [teamMerged] = useAfmachineSubscription("onMergeTeam", () =>
    revalidator.revalidate(),
  );
  const [wristbandUnregistered] = useAfmachineSubscription(
    "onUnregisterWristband",
    () => revalidator.revalidate(),
  );

  return (
    <StyleRouteMergeTeam className={className} {...props}>
      <PopoverAsyncState action={team.merge} />
      <div style={{ gridArea: "select_player" }}></div>
      <StyleSelectPlayer>
        <React.Suspense fallback={<StyleMoonLoader />}>
          <Await resolve={loadPlayers.players}>
            {(loadedPlayers = []) => (
              <ComboboxSelectPlayer
                players={loadedPlayers}
                onSelect={addTeamPlayer}
                Option={ComboboxOptionPlayer}
              />
            )}
          </Await>
        </React.Suspense>
      </StyleSelectPlayer>
      <StyledTeamInfo style={{ gridArea: "team_name" }}>
        <StyledTeamTupleState nok />
        <StyledFormTeamName
          key={team.name}
          fields={{ teamName: team.name }}
          onChange={changeTeamName}
        />
      </StyledTeamInfo>
      <RegistrationQueue
        style={{ gridArea: "merge_team" }}
        players={roster}
        onPlayerRemove={removeTeamPlayer}
      />
    </StyleRouteMergeTeam>
  );
}

const StyledTeamInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  width: 100%;
  position: relative;
  top: -5px;
`;

const StyleRouteMergeTeam = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 163px 1fr;
  grid-template-areas: "select_player team_name" "select_player merge_team";
  justify-items: end;
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

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={50} />;
}

export { RouteMergeTeam };

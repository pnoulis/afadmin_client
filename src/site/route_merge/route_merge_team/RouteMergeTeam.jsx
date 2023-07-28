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

function RouteMergeTeam({ className, ...props }) {
  const {
    state,
    id,
    team,
    roster,
    addTeamPlayer,
    removeTeamPlayer,
    changeTeamName,
    mergingAction,
  } = useContextTeam();
  const loadPlayers = useLoaderData();
  const { searchPlayer } = useContextApp();

  // If the comboboxes data source changes, it asks for
  // new data and rerenders the result. The ComboboxSearchPlayer's
  // data source is the __searchPlayer function, which is redefined
  // each time a wristband is registered on unregistered.
  const __searchPlayer = React.useCallback(
    (searchTerm) => searchPlayer(searchTerm),
    [],
  );

  return (
    <StyleRouteMergeTeam className={className} {...props}>
      <div style={{ gridArea: "select_player" }}></div>
      <StyleSelectPlayer>
        <PopoverAsyncState action={mergingAction} />
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
        <StyledFormTeamName onChange={changeTeamName} />
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

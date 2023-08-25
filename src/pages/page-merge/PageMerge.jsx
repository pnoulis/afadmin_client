// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { useLoaderData, Await } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelMerge } from "./PanelMerge.jsx";
import { ComboboxSelectPlayer } from "./ComboboxSelectPlayer.jsx";
import { ComboboxOptionPlayer } from "./ComboboxOptionPlayer.jsx";
import { FormTeamName } from "/src/components/teams/index.js";
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
} from "/src/components/registration-queue/index.js";
import { Pending } from "/src/components/async/index.js";
import { usePersistentTeam } from "/src/components/teams/index.js";

function PageMerge() {
  const ctxTeam = usePersistentTeam();
  const loadPlayers = useLoaderData();
  return (
    <PanelMerge>
      <StyledPageMerge>
        <StyledSelectPlayer>
          <React.Suspense fallback={<Pending />}>
            <Await resolve={loadPlayers.players}>
              {function (players) {
                return (
                  <ComboboxSelectPlayer
                    players={players}
                    onSelect={ctxTeam.addPlayer}
                    Option={ComboboxOptionPlayer}
                  />
                );
              }}
            </Await>
          </React.Suspense>
        </StyledSelectPlayer>
        <FormTeamName
          legend="team name"
          style={{ gridArea: "team_name", maxWidth: "500px" }}
        />

        <ContextProvideRegistrationQueue
          ctx={{
            addQueue: ctxTeam.addPlayer,
            rmQueue: ctxTeam.rmPlayer,
            queue: ctxTeam.roster,
          }}
        >
          <RegistrationQueue style={{ gridArea: "registration_queue" }} />
        </ContextProvideRegistrationQueue>
      </StyledPageMerge>
    </PanelMerge>
  );
}

const StyledPageMerge = styled("div")`
  padding: 25px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas: "select_player team_name" "select_player registration_queue";
  row-gap: 50px;
  column-gap: 120px;
`;

const StyledSelectPlayer = styled.section`
  grid-area: select_player;
  width: 100%;
  height: 100%;
  padding: 15px 0 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageMerge };

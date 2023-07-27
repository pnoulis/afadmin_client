import * as React from "react";
import styled from "styled-components";
import { useContextApp } from "/src/contexts/index.js";
import { useAfmachineSubscription } from "/src/hooks/index.js";
import { RegistrationQueue } from "/src/components/registration_queue/index.js";
import { useLoaderData, Await } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { ComboboxSelectPlayer } from "/src/components/comboboxes/index.js";

function RouteMergeTeam({ className, ...props }) {
  const loadPlayers = useLoaderData();
  const {
    searchPlayer,
    registrationQueue,
    addPlayerRegistrationQueue,
    removePlayerRegistrationQueue,
  } = useContextApp();
  const [registered] = useAfmachineSubscription("onRegisterWristband");
  const [unregistered] = useAfmachineSubscription("onUnregisterWristband");

  // If the comboboxes data source changes, it asks for
  // new data and rerenders the result. The ComboboxSearchPlayer's
  // data source is the __searchPlayer function, which is redefined
  // each time a wristband is registered on unregistered.
  const __searchPlayer = React.useCallback(
    (searchTerm) => searchPlayer(searchTerm),
    [registered, unregistered],
  );
  return (
    <StyleRouteMergeTeam className={className} {...props}>
      <StyleSelectPlayer>
        <React.Suspense fallback={<StyleMoonLoader />}>
          <Await resolve={loadPlayers.players}>
            {function (loadedPlayers = []) {
              return (
                <ul>
                  {loadedPlayers.map((l) => {
                    return (
                      <li key={l.username}>
                        <p>{l.username}</p>
                      </li>
                    );
                  })}
                </ul>
              );
            }}
          </Await>
        </React.Suspense>
      </StyleSelectPlayer>
      <RegistrationQueue style={{ gridArea: "merge_team" }} players={[]} />
    </StyleRouteMergeTeam>
  );
}

const StyleRouteMergeTeam = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 1fr;
  grid-template-areas: "select_player merge_team";
  justify-items: end;
  align-items: start;
`;

const StyleSelectPlayer = styled.section`
  grid-area: select_player;
  width: 100%;
  height: 100%;
  padding: 15px 0 0 15px;
`;

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={100} />;
}

export { RouteMergeTeam };

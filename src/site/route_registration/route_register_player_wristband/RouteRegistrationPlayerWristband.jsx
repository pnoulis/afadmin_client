import * as React from "react";
import styled from "styled-components";
import { ComboboxSearchPlayer } from "/src/components/comboboxes/index.js";
import { ComboboxOptionPlayer } from "./ComboboxOptionPlayer";
import { useContextApp } from "/src/contexts/index.js";
import { useAfmachineSubscription } from "/src/hooks/index.js";
import { RegistrationQueue } from "/src/components/registration_queue/index.js";

function RouteRegistrationPlayerWristband({ className, ...props }) {
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
    <StyleRouteRegistrationWristband className={className} {...props}>
      <StyleSelectPlayer>
        <ComboboxSearchPlayer
          searchPlayer={__searchPlayer}
          onSelect={addPlayerRegistrationQueue}
          Option={ComboboxOptionPlayer}
        />
      </StyleSelectPlayer>
      <RegistrationQueue
        style={{ gridArea: "pair_wristband" }}
        players={registrationQueue}
        onPlayerRemove={removePlayerRegistrationQueue}
      />
    </StyleRouteRegistrationWristband>
  );
}

const StyleRouteRegistrationWristband = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 1fr;
  grid-template-areas: "select_player pair_wristband";
  justify-items: end;
  align-items: start;
`;

const StyleSelectPlayer = styled.section`
  grid-area: select_player;
  width: 100%;
  height: 100%;
  padding: 15px 0 0 15px;
`;

export { RouteRegistrationPlayerWristband };

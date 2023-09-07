// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { AncestorDimensions } from "react_utils";
// ------------------------------ project  ------------------------------- //
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
  useRegistrationQueue,
  PlayerActionCard,
} from "/src/components/registration-queue/index.js";
import { ComboboxSearchPlayer } from "/src/pages/page-registration/page-registration-wristband/ComboboxSearchPlayer.jsx";
import { ComboboxOptionPlayer } from "/src/pages/page-registration/page-registration-wristband/ComboboxOptionPlayer.jsx";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { useAfmachineSubscription } from "/src/hooks/index.js";
import { PersistentPlayer } from "/src/components/players/index.js";

function PageRegistrationWristband() {
  const ctx = useRegistrationQueue([]);
  const [registered] = useAfmachineSubscription("onRegisterWristband");
  const [unregistered] = useAfmachineSubscription("onUnregisterWristband");

  const searchPlayer = React.useCallback(
    (searchTerm) => afmachine.searchPlayer({ searchTerm }),
    [registered, unregistered],
  );

  return (
    <StyledPageRegistrationWristband>
      <ComboboxSearchPlayer
        style={{ width: "100%", height: "100%" }}
        searchPlayer={searchPlayer}
        onSelect={ctx.addQueue}
        Option={ComboboxOptionPlayer}
      />

      <ContextProvideRegistrationQueue ctx={ctx}>
        <AncestorDimensions ancestor="#ancestor-scrollarea">
          <RegistrationQueue
            style={{ alignSelf: "end" }}
            renderPlayer={(props) => (
              <PersistentPlayer {...props}>
                <PlayerActionCard player={props.player} />
              </PersistentPlayer>
            )}
          ></RegistrationQueue>
        </AncestorDimensions>
      </ContextProvideRegistrationQueue>
    </StyledPageRegistrationWristband>
  );
}

const StyledPageRegistrationWristband = styled("div")`
  padding: 25px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "select_player pair_wristband";
  justify-items: end;
  align-items: start;
  column-gap: 120px;
`;

export { PageRegistrationWristband };

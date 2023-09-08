// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useContextTeam } from "/src/contexts/index.js";
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
} from "/src/components/registration-queue/index.js";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { TeamPlayerInfoCard } from "./TeamPlayerInfoCard.jsx";

function TeamPlayers({ style }) {
  const { roster } = useContextTeam();
  return (
    <ContextProvideRegistrationQueue
      ctx={{
        queue: roster,
      }}
    >
      <RegistrationQueue
        style={style}
        renderPlayer={(props) => (
          <Player {...props}>
            <Wristband wristband={props.player.wristband}>
              <TeamPlayerInfoCard />
            </Wristband>
          </Player>
        )}
      />
    </ContextProvideRegistrationQueue>
  );
}

export { TeamPlayers };

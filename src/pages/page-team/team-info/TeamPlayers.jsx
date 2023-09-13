// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useContextTeam } from "/src/contexts/index.js";
import {
  RegistrationQueue,
  ContextProvideRegistrationQueue,
  StyledListPlayers,
} from "/src/components/registration-queue/index.js";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { TeamPlayerInfoCard } from "./TeamPlayerInfoCard.jsx";
import { AncestorDimensions } from "react_utils/misc";

function TeamPlayers({ style }) {
  const { roster } = useContextTeam();
  return (
    <ContextProvideRegistrationQueue
      ctx={{
        queue: roster,
      }}
    >
      <AncestorDimensions ancestor="#teaminfo-outlet">
        <StyledRegistrationQueue
          fill
          style={style}
          renderPlayer={(props) => (
            <Player {...props}>
              <Wristband wristband={props.player.wristband}>
                <TeamPlayerInfoCard />
              </Wristband>
            </Player>
          )}
        />
      </AncestorDimensions>
    </ContextProvideRegistrationQueue>
  );
}

const StyledRegistrationQueue = styled(RegistrationQueue)`
  height: 500px;
  max-height: ${({ $height }) => $height + "px"};
  margin: auto;

  ${StyledListPlayers} {
    justify-content: space-around;
    align-content: space-evenly;
    gap: initial;
    width: 100%;
    max-width: initial;
    height: 100%;
  }
`;

export { TeamPlayers };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { AncestorDimensions } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { useContextRegistrationQueue } from "./ContextRegistrationQueue.jsx";
import { PlayerActionCard } from "./PlayerActionCard.jsx";
import { PersistentPlayer } from "/src/components/players/index.js";
import { RegistableWristband } from "/src/components/wristbands/index.js";
import WristbandBackground from "agent_factory.shared/ui/new-icons/wristband-gear.svg";

function RegistrationQueue({ className, style }) {
  const { queue } = useContextRegistrationQueue();
  return (
    <StyledRegistrationQueue
      className={className}
      style={style}
      id="registration-queue"
    >
      <AncestorDimensions ancestor="#registration-queue">
        <StyledListPlayers>
          {queue.map((p, i) => (
            <PersistentPlayer key={p.username + i} player={p}>
              <RegistableWristband wristband={p.wristband}>
                <PlayerActionCard player={p} />
              </RegistableWristband>
            </PersistentPlayer>
          ))}
        </StyledListPlayers>
      </AncestorDimensions>
    </StyledRegistrationQueue>
  );
}

const StyledRegistrationQueue = styled("section")`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--br-lg);
  background-color: white;
  background-image: url(${WristbandBackground});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
`;

const StyledListPlayers = styled("ul")`
  margin: auto;
  overflow-y: auto;
  overflow-x: none;
  width: 590px;
  height: 100%;
  max-height: ${({ $height }) => `${$height || 0}px`};
  display: grid;
  grid-template-columns: repeat(3, 170px);
  grid-auto-rows: max-content;
  gap: 20px;
  padding: 20px;
  border-radius: var(--br-lg);
`;

export { RegistrationQueue };

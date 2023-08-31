// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextRegistrationQueue } from "./ContextRegistrationQueue.jsx";
import { PlayerActionCard } from "./PlayerActionCard.jsx";
import { PersistentPlayer } from "/src/components/players/index.js";
import WristbandBackground from "agent_factory.shared/ui/new-icons/wristband-gear.svg";

function RegistrationQueue({ className, style, $height, renderPlayer }) {
  const { queue } = useContextRegistrationQueue();
  return (
    <StyledRegistrationQueue
      className={className}
      style={style}
      $height={$height}
    >
      <StyledListPlayers>
        {queue.map((p, i) =>
          isFunction(renderPlayer) ? (
            renderPlayer(p, i)
          ) : (
            <PersistentPlayer key={p.username + i} player={p}>
              <PlayerActionCard player={p} />
            </PersistentPlayer>
          ),
        )}
      </StyledListPlayers>
    </StyledRegistrationQueue>
  );
}

const StyledRegistrationQueue = styled("section")`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 650px;
  border-radius: var(--br-lg);
  background-color: white;
  box-shadow: var(--sd-4);
  background-image: url(${WristbandBackground});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  max-height: ${({ $height }) => ($height ? `${$height - 35}px` : "auto")};
`;

const StyledListPlayers = styled("ul")`
  margin: auto;
  max-width: 590px;
  overflow-y: auto;
  overflow-x: none;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 170px);
  grid-auto-rows: max-content;
  gap: 20px;
  padding: 20px;
  border-radius: var(--br-lg);
`;

export { RegistrationQueue, StyledListPlayers };

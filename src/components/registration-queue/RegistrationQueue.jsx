// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useContextRegistrationQueue } from "./ContextRegistrationQueue.jsx";
import WristbandBackground from "agent_factory.shared/ui/new-icons/wristband-gear.svg";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";

function RegistrationQueue({
  className,
  style,
  $height,
  disable,
  renderPlayer,
  fill = false,
}) {
  const { queue } = useContextRegistrationQueue();

  const viewingQueue = React.useMemo(() => {
    if (!fill) return queue;
    const vqueue = new Array(MAX_TEAM_SIZE);
    for (let i = 0; i < MAX_TEAM_SIZE; i++) {
      if (queue[i] == null) {
        vqueue[i] = afmachine.createPlayer({
          username: "player_#" + (i + 1),
        });
        vqueue[i].filler = true;
      } else {
        vqueue[i] = queue[i];
      }
    }
    return vqueue;
  }, [queue]);

  return (
    <StyledRegistrationQueue
      disable={disable}
      className={className}
      style={style}
      $height={$height}
    >
      <StyledListPlayers>
        {viewingQueue.map((player, i) => renderPlayer({ key: i, player }))}
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
  box-shadow: var(--sd-14), var(--sd-4);
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

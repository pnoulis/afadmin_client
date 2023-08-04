import * as React from "react";
import styled from "styled-components";
import { ReactComponent as WristbandIcon } from "agent_factory.shared/ui/icons/wristband_image.svg";
import { AncestorDimensions } from "react_utils";
import { ActionCardRegistrationQueue } from "./ActionCardRegistrationQueue";

function RegistrationQueue({
  players = [],
  onPlayerRemove = () => {},
  className,
  ...props
}) {
  return (
    <StyleRegistrationQueue
      id="registration-queue"
      className={className}
      {...props}
    >
      <AncestorDimensions ancestor="#registration-queue">
        <StyleListPlayers>
          {players.map((player, i) => (
            <ActionCardRegistrationQueue
              key={player.username + i}
              player={player}
              seat={player.seat}
              onPlayerRemove={onPlayerRemove}
            />
          ))}
        </StyleListPlayers>
      </AncestorDimensions>
      <StyleWristbandIcon>
        <WristbandIcon />
      </StyleWristbandIcon>
    </StyleRegistrationQueue>
  );
}

const StyleListPlayers = styled.ul`
  overflow-y: auto;
  overflow-x: none;
  height: 100%;
  max-height: ${({ $height }) => `${$height ? $height - 10 : 0}px`};
  display: grid;
  grid-template-columns: repeat(3, 210px);
  grid-auto-rows: max-content;
  justify-content: center;
  gap: 15px;
  padding-top: 15px;
  padding-right: 15px;
`;

const StyleRegistrationQueue = styled.div`
  grid-area: pair_wristband;
  width: 100%;
  height: 100%;
  max-width: 700px;
  position: relative;
  background-color: var(--grey-light);
  padding: 15px 0 15px 15px;
  border-radius: var(--br-lg);
`;

const StyleWristbandIcon = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
  top: 50%;
  max-width: 400px;
  transform: translate(-45%, -40%);

  display: flex;
  justify-content: center;
  align-items: center;

  .handBracelet .circle {
    fill: var(--success-light);
  }

  z-index: 1;
`;

export { RegistrationQueue };

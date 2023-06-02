import * as React from "react";
import styled from "styled-components";
import {
  InfoCardPlayer as InfoCard,
  InfoCardTuple,
} from "/src/components/players/info_cards/index.js";
import {
  WidgetPlayerPairWristband,
  WidgetPlayerRemove,
} from "/src/components/players/widgets/index.js";
import { mapPlayerStatus } from "agent_factory.shared/utils/index.js";

function WidgetPlayer({
  player,
  index,
  onWristbandPairToggle,
  onPlayerRemove,
  className,
  ...props
}) {
  return (
    <InfoCard as="li" player={player} className={className} {...props}>
      {player ? (
        <>
          <StyleWidgetPlayerPairWristband
            $wristbandColor={player?.wristband?.wristbandColor}
            onToggleWristbandPairing={onWristbandPairToggle}
          />
          <StyleInfoCardTupleUsername name="username" />
          <StyleInfoCardTupleUsername
            name="status"
            value={mapPlayerStatus(player)}
          />
          <StyleWidgetPlayerRemove onRemovePlayer={onPlayerRemove} />
        </>
      ) : (
        <StyleInfoCardTupleUsername
          name="username"
          value={`player_#${index}`}
        />
      )}
    </InfoCard>
  );
}

const StyleWidgetPlayer = styled(WidgetPlayer)`
  width: min-content;
  display: flex;
  flex-flow: column nowrap;
  height: min-content;
  justify-content: center;
  z-index: 2;
  background-color: white;
  cursor: initial;
  gap: 8px;
  opacity: ${({ player }) => (player ? "1" : "0.6")};
`;

const StyleWidgetPlayerPairWristband = styled(WidgetPlayerPairWristband)`
  cursor: pointer;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  padding: 8px;
  border: 3px solid transparent;
  margin: auto;
`;

const StyleWidgetPlayerRemove = styled(WidgetPlayerRemove)`
  margin: auto;
  background-color: var(--grey-subtle);
  width: 20px;
  height: 20px;
  svg {
    fill: var(--primary-subtle);
  }
  &:hover {
    background-color: var(--grey-light);
  }
`;

const StyleInfoCardTupleUsername = styled(InfoCardTuple)`
  .key {
    display: none;
  }
  .value {
    font-size: var(--tx-nl);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
  }
`;

export { StyleWidgetPlayer as WidgetPlayer };

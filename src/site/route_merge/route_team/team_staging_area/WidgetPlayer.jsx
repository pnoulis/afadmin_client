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
  onToggleWristbandPairing,
  onRemovePlayer,
  className,
  ...props
}) {
  return (
    <InfoCard as="li" player={player} className={className} {...props}>
      {player ? (
        <>
          <StyleWidgetPlayerPairWristband
            $wristbandColor={player?.wristband?.wristbandColor}
            onToggleWristbandPairing={onToggleWristbandPairing}
          />
          <StyleInfoCardTupleUsername name="username" />
          <StyleInfoCardTupleUsername
            name="status"
            value={mapPlayerStatus(player)}
          />
          <StyleWidgetPlayerRemove onRemovePlayer={onRemovePlayer} />
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
  display: flex;
  flex-flow: column nowrap;
  height: 220px;
  justify-content: center;
  z-index: 2;
  background-color: white;
  cursor: initial;
  gap: 8px;
  opacity: ${({ player }) => (player ? "1" : "0.7")};
`;

const StyleWidgetPlayerPairWristband = styled(WidgetPlayerPairWristband)`
  cursor: pointer;
  box-sizing: border-box;
  width: 75px;
  height: 75px;
  padding: 12px;
  border: 3px solid transparent;
  margin: auto;
  ${({ $wristbandColor }) =>
    $wristbandColor
      ? `
border-color: ${$wristbandColor};
background-color: ${$wristbandColor};
fill: white;
`
      : `
background-color: var(--grey-base);
border-color: var(--primary-subtle);
`}
`;

const StyleWidgetPlayerRemove = styled(WidgetPlayerRemove)`
  margin: auto;
  background-color: var(--grey-subtle);
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

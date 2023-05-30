import * as React from "react";
import styled from "styled-components";
import {
  InfoCardPlayer as InfoCard,
  InfoCardTuple,
  StyleInfoCardIdentifierTuple,
  StyleInfoCardIdentifiers,
  StyleInfoCardAttributes,
} from "/src/components/players/info_cards/index.js";
import { WidgetPlayerSignal } from "/src/components/players/widgets/WidgetPlayerSignal.jsx";
import {
  mapWristbandColor,
  mapPlayerStatus,
} from "agent_factory.shared/utils/index.js";

const StyleInfoCardTupleStatus = styled(InfoCardTuple)`
  .value {
    font-size: var(--tx-nl);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
  }
`;

function WidgetPlayer({
  player,
  onToggleWristbandPairing,
  className,
  ...props
}) {
  return (
    <InfoCard as="li" player={player} className={className} {...props}>
      <StyleInfoCardIdentifiers>
        <StyleInfoCardIdentifierTuple name="username" />
        <StyleInfoCardIdentifierTuple name="name" />
        <StyleInfoCardIdentifierTuple name="surname" />
        <StyleInfoCardIdentifierTuple name="email" />
      </StyleInfoCardIdentifiers>
      <StyleInfoCardAttributes>
        <StyleInfoCardTupleStatus
          name="status"
          value={mapPlayerStatus(player)}
        />
        <InfoCardTuple name="rfid" value={player.wristband.wristbandNumber} />
        <InfoCardTuple
          name="color"
          value={mapWristbandColor(
            "colorCode",
            player.wristband.wristbandColor
          )}
        />
        <WidgetPlayerSignal
          style={{ gridRow: "1 / 4", gridColumn: "2 / 3", cursor: "pointer" }}
          size="20px"
          onToggleWristbandPairing={onToggleWristbandPairing}
        />
      </StyleInfoCardAttributes>
    </InfoCard>
  );
}

const StyleWidgetPlayer = styled(WidgetPlayer)`
  background-color: white;
  cursor: initial;
  z-index: 2;
`;

export { StyleWidgetPlayer as WidgetPlayer };

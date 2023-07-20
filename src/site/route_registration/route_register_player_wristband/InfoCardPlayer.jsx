import * as React from "react";
import styled from "styled-components";
import {
  InfoCardPlayer as InfoCard,
  InfoCardTuple,
  StyleInfoCardIdentifierTuple,
  StyleInfoCardIdentifiers,
  StyleInfoCardAttributes,
  IndicatorPlayerWristband,
} from "/src/components/players/info_cards/index.js";
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

function InfoCardPlayer({ player }) {
  return (
    <InfoCard player={player}>
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
        <IndicatorPlayerWristband
          style={{ gridRow: "1 / 4", gridColumn: "2 / 3" }}
          size="20px"
        />
      </StyleInfoCardAttributes>
    </InfoCard>
  );
}

export { InfoCardPlayer };

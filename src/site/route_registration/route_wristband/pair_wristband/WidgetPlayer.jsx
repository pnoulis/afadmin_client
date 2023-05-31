import * as React from "react";
import styled from "styled-components";
import {
  InfoCardPlayer as InfoCard,
  InfoCardTuple,
  StyleInfoCardIdentifierTuple,
  StyleInfoCardIdentifiers,
  StyleInfoCardAttributes,
} from "/src/components/players/info_cards/index.js";
import {
  WidgetPlayerPairWristband,
  WidgetPlayerRemove,
} from "/src/components/players/widgets/index.js";
import { Svg } from "react_utils/svgs";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/x-10329.svg";
import {
  mapWristbandColor,
  mapPlayerStatus,
} from "agent_factory.shared/utils/index.js";

function WidgetPlayer({
  player,
  onWristbandPairToggle,
  onPlayerRemove,
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
      <StyleInfoCardAttributes style={{ width: "220px" }}>
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
        <WidgetPlayerPairWristband
          style={{ gridRow: "1 / 4", gridColumn: "2 / 3", cursor: "pointer" }}
          size="20px"
          onToggleWristbandPairing={onWristbandPairToggle}
        />
        <WidgetPlayerRemove onRemovePlayer={onPlayerRemove}>
          <StylePlayerRemove>
            <TrashIcon />
          </StylePlayerRemove>
        </WidgetPlayerRemove>
      </StyleInfoCardAttributes>
    </InfoCard>
  );
}

const StyleInfoCardTupleStatus = styled(InfoCardTuple)`
  .value {
    font-size: var(--tx-nl);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
  }
`;

const StyleWidgetPlayer = styled(WidgetPlayer)`
  background-color: white;
  cursor: initial;
  z-index: 2;
  position: relative;
`;

const StylePlayerRemove = styled(Svg)`
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--black-subtle);
  padding: 8px;
  width: 35px;
  height: 35px;
  transform: translate(30%, -25%);
  cursor: pointer;
  border-radius: var(--br-round);
  fill: white;
`;

export { StyleWidgetPlayer as WidgetPlayer };

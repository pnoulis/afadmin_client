import * as React from "react";
import styled from "styled-components";
import {
  InfoCardPlayer,
  InfoCardTuple,
  StyleInfoCardIdentifiers,
  StyleInfoCardAttributes,
  IndicatorPlayerWristband,
} from "/src/components/players/info_cards/index.js";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";

const pl = {
  username: "yolo",
};

export default function ScratchInfoCardPlayer() {
  return (
    <div>
      <h1>scratch info card player</h1>
      <div>
        <InfoCardPlayer player={pl}>
          <StyleInfoCardIdentifiers>
            <InfoCardTuple name="username" />
            <InfoCardTuple name="username" />
            <InfoCardTuple name="username" />
          </StyleInfoCardIdentifiers>
          <StyleInfoCardAttributes>
            <InfoCardTuple style={{ gridColumn: "1 / 2" }} name="username" />
            <InfoCardTuple style={{ gridColumn: "1 / 2" }} name="username" />
            <InfoCardTuple style={{ gridColumn: "1 / 2" }} name="username" />
            <IndicatorPlayerWristband
              style={{ gridRow: "1 / 4", gridColumn: "2 / 3" }}
              size="20px"
            />
          </StyleInfoCardAttributes>
        </InfoCardPlayer>
      </div>
    </div>
  );
}

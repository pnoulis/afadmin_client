import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { SvgBall, Svg } from "react_utils/svgs";
import { mapWristbandColor } from "agent_factory.shared/utils/index.js";
import { ReactComponent as Signal } from "agent_factory.shared/ui/icons/signal_1.svg";
import { ReactComponent as IconGroupParty } from "agent_factory.shared/ui/icons/group_add_filled.svg";

function getPlayerStatus(player) {
  if (player.wristband?.active) {
    return "registered";
  }

  return "empty";
}

const mockPlayers = [
  {
    username: "test1_username",
    name: "test1_name",
    surname: "test1_surname",
    email: "test1_email@gmail.com",
    password: "test1_password",
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 10,
      wristbandColor: 0,
      active: true,
    },
  },
  {
    username: "group1_username",
    name: "group1_name",
    surname: "group1_surname",
    email: "group1_email@gmail.com",
    password: "group1_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: null,
  },
  {
    username: "group2_username",
    name: "group2_name",
    surname: "group2_surname",
    email: "group2_email@gmail.com",
    password: "group2_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group3_username",
    name: "group3_name",
    surname: "group3_surname",
    email: "group3_email@gmail.com",
    password: "group3_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group4_username",
    name: "group4_name",
    surname: "group4_surname",
    email: "group4_email@gmail.com",
    password: "group4_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group5_username",
    name: "group5_name",
    surname: "group5_surname",
    email: "group5_email@gmail.com",
    password: "group5_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },

  {
    username: "group6_username",
    name: "group6_name",
    surname: "group6_surname",
    email: "group6_email@gmail.com",
    password: "group6_password",
    groupParty: true,
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 9,
      wristbandColor: 1,
      active: true,
    },
  },
];

function SelectPlayerCard({ player, className, ...props }) {
  return (
    <StyleSelectPlayerCard className={className} {...props}>
      <PlayerIdentifiers player={player} />
      <PlayerAttributes player={player} />
    </StyleSelectPlayerCard>
  );
}

const StyleSelectPlayerCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 20px;
  width: 470px;
  padding: 10px 15px;
  border-radius: var(--br-lg);

  section:nth-child(1) {
  }

  section:nth-child(2) {
  }
`;

function PlayerIdentifiers({ player }) {
  return (
    <StylePlayerIdentifiers>
      <ul>
        <li className="username">
          <span className="key">username</span>
          <span className="value">{player?.username}</span>
        </li>
        <li className="name">
          <span className="key">name</span>
          <span className="value">{player?.name}</span>
        </li>
        <li className="surname">
          <span className="key">surname</span>
          <span className="value">{player?.surname}</span>
        </li>
      </ul>
    </StylePlayerIdentifiers>
  );
}

const StylePlayerIdentifiers = styled.section`
  align-self: start;
  ul {
    margin-top: 2px;
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;

    letter-spacing: 1px;
    font-family: Roboto-Regular;
    font-size: var(--tx-sm);
    color: var(--black-medium);

    & .key {
      font-size: var(--tx-sm);
      font-family: Roboto-Bold;
      margin-right: 5px;
      letter-spacing: 1px;
    }

    & .key::after {
      content: ":";
    }
  }
`;

function PlayerAttributes({ player }) {
  return (
    <StylePlayerAttributes>
      <AttributeTuples player={player} />
      <AttributeWristbandSignal player={player} />
      <AttributeGroupParty player={player} />
    </StylePlayerAttributes>
  );
}

const StylePlayerAttributes = styled.section`
  background-color: var(--grey-subtle);
  box-sizing: content-box;
  width: 180px;
  border-radius: var(--br-lg);
  padding: 10px 15px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "tuples group_party" "tuples wristband_signal";
  align-items: center;
  justify-items: start;
  row-gap: 10px;
`;

function AttributeTuples({ player, className, ...props }) {
  return (
    <StyleAttributeTuples className={className} {...props}>
      <li className="status">
        <span className="key">status</span>
        <span className="value">{getPlayerStatus(player)}</span>
      </li>
      <li className="rfid">
        <span className="key">rfid</span>
        <span className="value">{player?.wristband?.wristbandNumber}</span>
      </li>
    </StyleAttributeTuples>
  );
}

const StyleAttributeTuples = styled.ul`
  grid-area: tuples;
  align-self: start;
  margin-top: 5px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;

  letter-spacing: 1px;
  font-family: Roboto-Regular;
  font-size: var(--tx-sm);
  color: var(--black-medium);

  & .key {
    font-size: var(--tx-sm);
    font-family: Roboto-Bold;
    margin-right: 5px;
    letter-spacing: 1px;
  }

  & .key::after {
    content: ":";
  }

  .status .value {
    font-family: Roboto-Bold;
    color: var(--info-medium);
  }
`;

function AttributeWristbandSignal({ player, className, ...props }) {
  return (
    <StyleAttributeWristbandSignal className={className} {...props}>
      <StyleWristbandSignalIcon
        wristbandColorCode={player?.wristband?.wristbandColor}
      >
        <Signal />
      </StyleWristbandSignalIcon>
    </StyleAttributeWristbandSignal>
  );
}

const StyleAttributeWristbandSignal = styled.div`
  grid-area: wristband_signal;
  justify-self: end;
`;

const StyleWristbandSignalIcon = styled(SvgBall)`
  box-sizing: border-box !important;
  width: 30px !important;
  height: 30px !important;
  background-color: ${({ wristbandColorCode }) => {
    if (!wristbandColorCode) {
      return "var(--grey-light)";
    }

    return mapWristbandColor("colorCode", wristbandColorCode);
  }};
`;

function AttributeGroupParty({ player, className, ...props }) {
  return (
    <StyleAttributeGroupParty className={className} {...props}>
      <StyleGroupPartyIcon>
        <IconGroupParty />
      </StyleGroupPartyIcon>
    </StyleAttributeGroupParty>
  );
}

const StyleAttributeGroupParty = styled.div`
  grid-area: group_party;
  justify-self: end;
`;

const StyleGroupPartyIcon = styled(SvgBall)`
  box-sizing: border-box !important;
  width: 30px !important;
  height: 30px !important;
  background-color: var(--info-light);
`;

export default function ScratchSelectPlayerCard({ className, ...props }) {
  return (
    <div className={className} {...props}>
      <h1>Scratch select player card</h1>
      <div>
        {mockPlayers.map((player, i) => (
          <SelectPlayerCard key={i} player={player} />
        ))}
      </div>
    </div>
  );
}

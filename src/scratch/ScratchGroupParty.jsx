import * as React from "react";
import styled from "styled-components";
import {
  StoreProvideGroupParty,
  useContextGroupParty,
} from "/src/stores/group_party/index.js";
import { StoreProvideApp, useContextApp } from "/src/app/index.js";
import { Team } from "/src/site/route_group_party/team/Team.jsx";
import { FormTeamName } from "/src/site/route_group_party/team/FormTeamName.jsx";
import { ListPlayers } from "/src/site/route_group_party/team/ListPlayers.jsx";
import { WidgetPlayer } from "/src/site/route_group_party/team/WidgetPlayer.jsx";
import { ListTeamWidgets } from "/src/site/route_group_party/team/ListTeamWidgets.jsx";
import { WidgetRemoveTeam } from "/src/site/route_group_party/team/WidgetRemoveTeam.jsx";
import { WidgetAddPlayer } from "../site/route_group_party/team/WidgetAddPlayer";

const roster = [
  {
    username: "inspiring1",
    name: "inspiring1",
    surname: "Hurin1",
    email: "inspiring1.Hurin1@afadmin.com",
    wristbandMerged: false,
    wristband: {},
  },
  {
    username: "inspiring1",
    name: "condescending2",
    surname: "Beorn2",
    email: "condescending2.Beorn2@afadmin.com",
    wristbandMerged: false,
    wristband: {},
  },
  {
    username: "inspiring1",
    name: "mystifying3",
    surname: "Samwise3",
    email: "mystifying3.Samwise3@afadmin.com",
    wristbandMerged: true,
    wristband: {
      wristbandNumber: 3,
      wristbandColor: 4,
      active: true,
    },
  },
  {
    username: "inspiring1",
    name: "zen4",
    surname: "Arwen4",
    email: "zen4.Arwen4@afadmin.com",
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 4,
      wristbandColor: 5,
      active: true,
    },
  },
  {
    username: "inspiring1",
    name: "eloquent5",
    surname: "Thingol5",
    email: "eloquent5.Thingol5@afadmin.com",
    wristbandMerged: false,
    wristband: {
      wristbandNumber: 5,
      wristbandColor: 5,
      active: true,
    },
  },
  {
    username: "inspiring1",
    name: "stupefied6",
    surname: "Beorn6",
    email: "stupefied6.Beorn6@afadmin.com",
    wristbandMerged: false,
    wristband: {},
  },
];

const StyleBox = styled.div`
  background-color: grey;
  min-width: 50px;
`;

function GroupParty() {
  const groupParty = useContextGroupParty();
  return (
    <div>
      <Team>
        <FormTeamName style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }} />
        <ListTeamWidgets style={{ gridColumn: " 1 / 2", gridRow: "2 / 3" }}>
          <WidgetRemoveTeam />
          <WidgetAddPlayer />
        </ListTeamWidgets>
        <ListPlayers style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>
          {roster.map((seat, i) => (
            <WidgetPlayer
              key={seat?.username || i}
              player={seat}
              index={i + 1}
            />
          ))}
        </ListPlayers>
      </Team>
    </div>
  );
}

export default function ScratchGroupParty() {
  return (
    <div>
      <h1>Scratch group party</h1>
      <div>
        <StoreProvideGroupParty>
          <GroupParty />
        </StoreProvideGroupParty>
      </div>
    </div>
  );
}

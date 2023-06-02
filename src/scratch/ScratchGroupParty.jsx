import * as React from "react";
import {
  StoreProvideGroupParty,
  useContextGroupParty,
} from "/src/stores/groupParty/index.js";
import { StoreProvideApp, useContextApp } from "/src/app/index.js";
import { WidgetPlayer } from "/src/site/route_group_party/team/WidgetPlayer.jsx";
import { Team } from "/src/site/route_group_party/team/Team.jsx";
import { ListPlayers } from "/src/site/route_group_party/team/ListPlayers.jsx";

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

function GroupParty() {
  const groupParty = useContextGroupParty();
  console.log(groupParty);
  return (
    <div>
      <Team>
        <ListPlayers roster={roster} />
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

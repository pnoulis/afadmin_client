import styled from "styled-components";
import { StoreProvideApp } from "/src/app/index.js";
import { GroupTeam } from "/src/site/route_group_party/group_team/GroupTeam.jsx";

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


function SomeTeam() {
  return <GroupTeam groupTeam={{
    currentRoster: {
      players: roster,
    }
  }}/>;
}

export default function ScratchTeam() {
  return (
    <div>
      <h1>scratch team</h1>
      <div>
        <StoreProvideApp>
          <SomeTeam />
        </StoreProvideApp>
      </div>
    </div>
  );
}

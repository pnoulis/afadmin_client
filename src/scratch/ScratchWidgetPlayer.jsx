import * as React from "react";
import styled from "styled-components";
import { WidgetPlayer } from "/src/site/route_registration/route_wristband/pair_wristband/WidgetPlayer.jsx";

const Player = {
  username: "auto1_thirsty1",
  name: "thirsty1",
  surname: "Eomer1",
  email: "thirsty1.Eomer1@afadmin.com",
  wristbandMerged: false,
  wristband: {
    wristbandNumber: 1,
    wristbandColor: 2,
    active: true,
  },
};

export default function ScratchWidgetPlayer() {
  return (
    <div>
      <h1>scratch widget player</h1>
      <div>
        <WidgetPlayer player={Player} />
      </div>
    </div>
  );
}

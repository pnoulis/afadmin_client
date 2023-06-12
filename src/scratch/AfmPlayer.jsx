import * as React from "react";
import { Player, useStateful, Wristband } from "../afmachine/index.js";
import { AsyncState } from "../components/AsyncState.jsx";
import {
  Player as PlayerStore,
  useContextPlayer,
} from "../afm_components/players/index.js";
import {
  Wristband as WristbandParent,
  useContextWristband,
  StoreProvideWristband,
  WidgetPairWristband,
} from "../afm_components/wristbands/index.js";

const pavlos = new Player();
const pavlosWristband = new Wristband();

function handleWristbandClick() {
  pavlosWristband.togglePairing();
}

function handlePlayerClick() {
  pavlos.register({});
}

function PlayerRegistration() {
  const { state, player, registrationState, onSubmitPlayerRegisterForm } =
    useContextPlayer();
  return (
    <div>
      <h1>player registration form</h1>
      <AsyncState state={registrationState}>
        <div
          onClick={() => {
            handlePlayerClick();
          }}
        >
          submit form
        </div>
        <div>{registrationState}</div>
      </AsyncState>
    </div>
  );
}

function WristbandChild({ ...props }) {
  const { state, wristband } = useContextWristband();
  return (
    <div>
      <br />
      <h1>wristband pairing</h1>
      <div
        onClick={() => {
          handleWristbandClick();
        }}
      >
        pair wristband
      </div>
      <div>{state}</div>
      <WidgetPairWristband />
    </div>
  );
}

export default function AfmPlayer() {
  return (
    <div>
      <h1>afm player</h1>
      <div>
        <PlayerStore player={pavlos}>
          <PlayerRegistration />
        </PlayerStore>
        <WristbandParent wristband={pavlosWristband}>
          <WristbandChild />
        </WristbandParent>
      </div>
    </div>
  );
}

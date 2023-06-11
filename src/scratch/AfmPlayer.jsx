import * as React from "react";
import { Player, useStateful } from "../afmachine/index.js";
import { AsyncState } from "../components/AsyncState.jsx";
import {
  Player as PlayerStore,
  useContextPlayer,
} from "../afm_components/players/index.js";

const pavlos = new Player();

function PlayerRegistration() {
  const { state, player, registrationState, onSubmitPlayerRegisterForm } =
    useContextPlayer();
  return (
    <div>
      <h1>player registration form</h1>
      <AsyncState state={registrationState}>
        <div {...onSubmitPlayerRegisterForm()}>submit form</div>
        <div>actual form</div>
        <div>{registrationState}</div>
      </AsyncState>
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
      </div>
    </div>
  );
}

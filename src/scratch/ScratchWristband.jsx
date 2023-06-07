import * as React from "react";
import styled from "styled-components";
import { Wristband, Player } from "/src/app/index.js";

export default function ScratchWristband() {
  const [wristband, setWristband] = React.useState(null);
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    console.log(wristband);
    console.log("WRISTBAND CHANGE");
  }, [wristband, setWristband]);

  React.useEffect(() => {
    console.log(player);
    console.log("PLAYER CHANGE");
  }, [player, setPlayer]);

  return (
    <div>
      <h1>scratch wristband</h1>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const ss = new Wristband();
            console.log(ss);
            setWristband(ss);
          }}
        >
          make wristband
        </button>
        <button
          onClick={() => {
            alert(wristband.getState());
          }}
        >
          get wrisband state
        </button>
        <button
          onClick={() => {
            alert(wristband.getColor());
          }}
        >
          get wristband color
        </button>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            const ss = new Player();
            console.log(ss);
            setPlayer(ss);
          }}
        >
          make player
        </button>
        <button
          onClick={() => {
            alert(player.getState());
          }}
        >
          get player state
        </button>
        <button
          onClick={() => {
            player.pairWristband();
          }}
        >
          pair wristband
        </button>
      </div>
    </div>
  );
}

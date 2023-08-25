// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Player, PlayerInfoCard } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";

function ComboboxOptionPlayer({ option: player }) {
  return (
    <Player player={player}>
      <Wristband wristband={player.wristband}>
        <PlayerInfoCard style={{ backgroundColor: "transparent" }} />
      </Wristband>
    </Player>
  );
}

export { ComboboxOptionPlayer };

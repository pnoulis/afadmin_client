// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  ContextProvidePlayer,
  ContextProvideWristband,
} from "/src/contexts/index.js";
import { usePersistentPlayer } from "/src/components/players/usePersistentPlayer.jsx";

function PersistentPlayer({ player, children, fill, depth }) {
  const ctxPlayer = usePersistentPlayer(player, { fill, depth });
  return (
    <ContextProvidePlayer ctx={ctxPlayer}>
      <ContextProvideWristband ctx={ctxPlayer.ctxWristband}>
        {children}
      </ContextProvideWristband>
    </ContextProvidePlayer>
  );
}

export { PersistentPlayer };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  ContextProvidePlayer,
  ContextProvideWristband,
} from "/src/contexts/index.js";
import { useTemporaryPlayer } from "./useTemporaryPlayer.jsx";

function TemporaryPlayer({ player, children, fill, depth }) {
  const ctxPlayer = useTemporaryPlayer(player, { fill, depth });
  return (
    <ContextProvidePlayer ctx={ctxPlayer}>
      <ContextProvideWristband ctx={ctxPlayer.ctxWristband}>
        {children}
      </ContextProvideWristband>
    </ContextProvidePlayer>
  );
}

export { TemporaryPlayer };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvidePlayer } from "/src/contexts/index.js";
import { usePersistentPlayer } from "/src/components/players/usePersistentPlayer.jsx";

function PersistentPlayer({ player, children, fill, depth }) {
  const ctx = usePersistentPlayer(player, { fill, depth });
  return <ContextProvidePlayer ctx={ctx}>{children}</ContextProvidePlayer>;
}

export { PersistentPlayer };

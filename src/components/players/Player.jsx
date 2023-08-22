// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvidePlayer } from "/src/contexts/index.js";
import { usePlayer } from "/src/components/players/usePlayer.jsx";

function Player({ player, children, fill, depth }) {
  const ctx = usePlayer(player, { fill, depth });
  return <ContextProvidePlayer ctx={ctx}>{children}</ContextProvidePlayer>;
}

export { Player };

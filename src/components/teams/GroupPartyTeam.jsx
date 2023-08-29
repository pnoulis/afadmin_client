// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useGroupPartyTeam } from "./useGroupPartyTeam.jsx";
import { ContextProvideTeam } from "/src/contexts/index.js";

function GroupPartyTeam({ team, onRemoveGPTeam, children, fill, depth }) {
  const ctx = useGroupPartyTeam(team, { onRemoveGPTeam, fill, depth });
  return <ContextProvideTeam ctx={ctx}>{children}</ContextProvideTeam>;
}

export { GroupPartyTeam };

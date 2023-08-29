// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { usePersistentTeam } from "./usePersistentTeam.jsx";
import { ContextProvideTeam } from "/src/contexts/index.js";

function PersistentTeam({ team, children, fill, depth }) {
  const ctx = usePersistentTeam(team, { fill, depth });
  console.log(ctx);
  return <ContextProvideTeam ctx={ctx}>{children}</ContextProvideTeam>;
}

export { PersistentTeam };

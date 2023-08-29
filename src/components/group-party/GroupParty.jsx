// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvideGroupParty } from "/src/contexts/index.js";
import { useGroupParty } from "./useGroupParty.jsx";

function GroupParty({ wristband, children, fill, depth }) {
  const ctx = useGroupParty(wristband, { fill, depth });
  return (
    <ContextProvideGroupParty ctx={ctx}>{children}</ContextProvideGroupParty>
  );
}

export { GroupParty };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvideWristband } from "/src/contexts/index.js";
import { useWristband } from "/src/components/wristbands/useWristband.jsx";

function Wristband({ player, children, fill, depth }) {
  const ctx = useWristband(player, { fill, depth });
  return (
    <ContextProvideWristband ctx={ctx}>{children}</ContextProvideWristband>
  );
}

export { Wristband };

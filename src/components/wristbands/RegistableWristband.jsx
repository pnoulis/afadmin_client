// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvideWristband } from "/src/contexts/index.js";
import { useRegistableWristband } from "/src/components/wristbands/useRegistableWristband.jsx";

function RegistableWristband({ wristband, children, fill }) {
  const ctx = useRegistableWristband(wristband, { fill });
  return (
    <ContextProvideWristband ctx={ctx}>{children}</ContextProvideWristband>
  );
}

export { RegistableWristband };

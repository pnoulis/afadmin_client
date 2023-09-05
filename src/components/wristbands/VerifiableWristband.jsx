// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvideWristband } from "/src/contexts/index.js";
import { useVerifiableWristband } from "./useVerifiableWristband.jsx";

function VerifiableWristband({ wristband, children, fill }) {
  const ctx = useVerifiableWristband(wristband, { fill });
  return (
    <ContextProvideWristband ctx={ctx}>{children}</ContextProvideWristband>
  );
}

export { VerifiableWristband };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextWristband } from "/src/contexts/index.js";

function WristbandTupleState({ label, nok, children }) {
  const { state } = useContextWristband();

  return isFunction(children) ? (
    children(label || "status", state)
  ) : (
    <>
      {!nok && <span className="key">{label || "status"}</span>}
      <span className="value">{state || "-"}</span>
    </>
  );
}

export { WristbandTupleState };

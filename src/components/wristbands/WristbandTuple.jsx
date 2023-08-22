// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextWristband } from "/src/contexts/index.js";

function WristbandTuple({ name, label, value, nok, children }) {
  const { wristband } = useContextWristband();

  return isFunction(children) ? (
    children(label || name, value || wristband[name])
  ) : (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || wristband[name] || "-"}</span>
    </>
  );
}

export { WristbandTuple };

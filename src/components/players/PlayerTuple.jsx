// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTuple({ name, label, value, nok, children }) {
  const { player } = useContextPlayer();

  return isFunction(children) ? (
    children(label || name, value || player[name])
  ) : (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || player[name] || "-"}</span>
    </>
  );
}

export { PlayerTuple };

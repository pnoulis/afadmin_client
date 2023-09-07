// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextTeam } from "/src/contexts/index.js";

function TeamTuple({ name, label, value, nok, children }) {
  const { team } = useContextTeam();

  return isFunction(children) ? (
    children(label || name, value || team[name])
  ) : (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || team[name] || "-"}</span>
    </>
  );
}

export { TeamTuple };

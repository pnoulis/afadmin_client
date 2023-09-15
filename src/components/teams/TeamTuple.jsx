// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextTeam } from "/src/contexts/index.js";

function TeamTuple({
  noc /* No context */,
  nok /* No key */,
  nov /* No value */,
  team: nocTeam /* Requires noc */,
  name,
  label,
  value,
  getValue,
  children,
}) {
  getValue ??= function (v) {
    return v;
  };
  const { team } = noc ? { team: nocTeam } : useContextTeam();

  return isFunction(children) ? (
    children(label ?? name, getValue(value ?? team[name]) ?? "-")
  ) : (
    <>
      {!nok && <span className={name + " key"}>{label ?? name}</span>}
      {!nov && (
        <span className={name + " value"}>
          {getValue(value ?? team[name]) ?? "-"}
        </span>
      )}
    </>
  );
}

export { TeamTuple };

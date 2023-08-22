// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPlayer } from "/src/contexts/index.js";

function PlayerTupleFullname({ label, nok, children }) {
  const { player } = useContextPlayer();

  return isFunction(children) ? (
    children(label || "name", player.name, player.surname)
  ) : (
    <>
      {!nok && <span className="key">{label || "name"}</span>}
      <span className="value firstname">{player.name || "-"}</span>
      <span className="value lastname">{player.surname || "-"}</span>
    </>
  );
}

export { PlayerTupleFullname };

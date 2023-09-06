// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPackage } from "/src/contexts/index.js";

function PackageTuple({ name, label, value, nok, children }) {
  const { pkg } = useContextPackage();
  return isFunction(children) ? (
    children(label || name, value || pkg[name])
  ) : (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || pkg[name] || "-"}</span>
    </>
  );
}

export { PackageTuple };

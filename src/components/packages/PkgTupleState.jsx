// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPackage } from "/src/contexts/index.js";

function PkgTupleState({ label = "status", nok = false, children }) {
  const { pkg } = useContextPackage();

  return isFunction(children) ? (
    children(label, pkg.getState?.().name || pkg.state)
  ) : (
    <>
      {!nok && <span className="key">{label}</span>}
      <span className="value">{pkg.getState?.().name || pkg.state}</span>
    </>
  );
}

export { PkgTupleState };

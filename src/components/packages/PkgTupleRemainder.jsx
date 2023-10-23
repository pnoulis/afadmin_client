// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction, isNumber } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { t_mstom } from "agent_factory.shared/utils/misc.js";
import { useContextPackage } from "/src/contexts/index.js";

function PkgTupleRemainder({
  name = "remainder",
  label = "remainder",
  nok = false,
  children,
}) {
  const { pkg } = useContextPackage();

  let value;
  let suffix;
  if (pkg.type === "mission") {
    value = pkg[name] ?? "";
    suffix = "missions";
  } else {
    value = isNumber(pkg[name]) ? Math.ceil(t_mstom(pkg[name])) : "-";
    suffix = "minutes";
  }

  return isFunction(children) ? (
    children(label, value, suffix)
  ) : (
    <>
      {!nok && <span className="key">{label}</span>}
      <span className="value">
        {value}
        <sub>{suffix}</sub>
      </span>
    </>
  );
}

export { PkgTupleRemainder };

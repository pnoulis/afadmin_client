// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPackage } from "/src/contexts/index.js";
import { useTime } from "/src/hooks/index.js";

function PkgTupleTStart({
  name = "t_start",
  label = "started",
  nok = false,
  children,
}) {
  const { pkg } = useContextPackage();
  const tstart = useTime({ tmilsec: pkg[name] });

  return isFunction(children) ? (
    children(label, pkg[name] ?? tstart)
  ) : (
    <>
      {!nok && <span className="key">{label}</span>}
      <span className="value">
        {pkg[name]
          ? `${tstart.hour}${tstart.literal}${tstart.minute}${tstart.literal}${tstart.second}`
          : "-"}
      </span>
    </>
  );
}

export { PkgTupleTStart };

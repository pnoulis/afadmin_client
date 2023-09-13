// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPackage } from "/src/contexts/index.js";
import { useTime } from "/src/hooks/index.js";

function PkgTupleTime({ name, label = "time", nok = false, children }) {
  const { pkg } = useContextPackage();
  const time = useTime({ tmilsec: pkg[name] });

  return isFunction(children) ? (
    children(label, pkg[name] && time)
  ) : (
    <>
      {!nok && <span className="key">{label}</span>}
      <span className="value">
        {pkg[name]
          ? `${time.hour}${time.literal}${time.minute}${time.literal}${time.second}`
          : "-"}
      </span>
    </>
  );
}

export { PkgTupleTime };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { useContextPackage } from "/src/contexts/index.js";

function PkgTupleCost({
  name = "cost",
  label = "cost",
  nok = false,
  children,
}) {
  const { pkg } = useContextPackage();

  return isFunction(children) ? (
    children(label, pkg[name])
  ) : (
    <>
      {!nok && <span className="key">{label}</span>}
      <span className="value">{pkg.cost || "0"}</span>
    </>
  );
}

const StylePkgTupleCost = styled("p")`
  color: black;
  box-sizing: border-box;
  line-height: 20px;
  font-size: var(--tx-md);
  font-family: Saira;
  display: flex;
  align-items: center;

  .key {
    font-weight: 600;
  }
  .key::after {
    content: ":";
    margin-left: 3px;
  }

  .value {
    text-align: center;
    min-width: 70px;
    word-break: break-all;
    overflow-wrap: anywhere;
  }

  .value::after {
    font-size: var(--tx-xl);
    content: "\u20AC";
    margin: 0 0 0 2px;
  }
`;

export { PkgTupleCost, StylePkgTupleCost };

import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import { CssPackageTuple } from "./PackageTuple.jsx";
import { t_mstom } from "agent_factory.shared/utils/misc.js";

function PackageTupleRemainder({ label, nok = false }) {
  const { pkg } = useContextPackage();

  let value, key;
  if (pkg.type === "mission") {
    value = pkg.remainder || "-";
  } else {
    value = Math.ceil(t_mstom(pkg.remainder)) || "-";
  }

  return (
    <>
      {!nok && <span className="key">{label || "remainder"}</span>}
      <span className="value">{value}</span>
    </>
  );
}

const CssPackageTupleRemainder = css`
  ${CssPackageTuple}
`;

const StylePackageTupleRemainder = styled.div`
  ${CssPackageTupleRemainder}
`;

function StyledPackageTupleRemainder({ label, nok, className, ...props }) {
  return (
    <StylePackageTupleRemainder className={className || ""} {...props}>
      <PackageTupleRemainder nok={nok} label={label} {...props} />
    </StylePackageTupleRemainder>
  );
}

export {
  PackageTupleRemainder,
  CssPackageTupleRemainder,
  StylePackageTupleRemainder,
  StyledPackageTupleRemainder,
};

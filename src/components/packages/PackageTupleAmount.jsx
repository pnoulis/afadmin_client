import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import { CssPackageTuple } from "./PackageTuple.jsx";
import { t_mstom } from "agent_factory.shared/utils/misc.js";

function PackageTupleAmount({ label, nok = false }) {
  const { pkg } = useContextPackage();

  let value, key;
  if (pkg.type === "mission") {
    value = pkg.amount || '-';
    key = "missions";
  } else {
    value = Math.ceil(t_mstom(pkg.amount)) || '-';
    key = "minutes";
  }

  return (
    <>
      {!nok && <span className="key">{key}</span>}
      <span className="value">{value}</span>
    </>
  );
}

const CssPackageTupleAmount = css`
  ${CssPackageTuple}
  `;

const StylePackageTupleAmount = styled.div`
  ${CssPackageTupleAmount}
`;

function StyledPackageTupleAmount({ label, nok, className, ...props }) {
  return (
    <StylePackageTupleAmount className={className || ""} {...props}>
      <PackageTupleAmount nok={nok} label={label} {...props} />
    </StylePackageTupleAmount>
  );
}

export {
  PackageTupleAmount,
  CssPackageTupleAmount,
  StylePackageTupleAmount,
  StyledPackageTupleAmount,
};

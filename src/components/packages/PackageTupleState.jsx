import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import { CssPackageTuple } from "./PackageTuple.jsx";

function PackageTupleState({ label, nok = false }) {
  const { pkg } = useContextPackage();
  return (
    <>
      {!nok && <span className="key">{label || "status"}</span>}
      <span className="value">{pkg.getState?.().name || pkg.state}</span>
    </>
  );
}

const CssPackageTupleState = css`
  ${CssPackageTuple}
  width: 185px;
  .value {
    font-size: var(--tx-nl);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
    word-break: keep-all;
    overflow-wrap: normal;
  }
`;

const StylePackageTupleState = styled.div`
  ${CssPackageTupleState}
`;

function StyledPackageTupleState({ label, nok, className, ...props }) {
  return (
    <StylePackageTupleState className={className || ""} {...props}>
      <PackageTupleState nok={nok} label={label} {...props} />
    </StylePackageTupleState>
  );
}

export {
  PackageTupleState,
  CssPackageTupleState,
  StylePackageTupleState,
  StyledPackageTupleState,
};

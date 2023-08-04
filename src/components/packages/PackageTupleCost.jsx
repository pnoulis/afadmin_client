import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";
import { CssPackageTuple } from "./PackageTuple.jsx";

function PackageTupleCost({ label, nok = false }) {
  const { pkg } = useContextPackage();
  return (
    <>
      {!nok && <span className="key">{label || "cost"}</span>}
      <span className="value">{`${pkg.cost}\u20AC`}</span>
    </>
  );
}

const CssPackageTupleCost = css`
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

const StylePackageTupleCost = styled.div`
  ${CssPackageTupleCost}
`;

function StyledPackageTupleCost({ label, nok, className, ...props }) {
  return (
    <StylePackageTupleCost className={className || ""} {...props}>
      <PackageTupleCost nok={nok} label={label} {...props} />
    </StylePackageTupleCost>
  );
}

export {
  PackageTupleCost,
  CssPackageTupleCost,
  StylePackageTupleCost,
  StyledPackageTupleCost,
};

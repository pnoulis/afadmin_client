import * as React from "react";
import styled, { css } from "styled-components";
import { useContextPackage } from "/src/contexts/index.js";

function PackageTuple({ name = "", label = "", value = "", nok = false }) {
  const { pkg } = useContextPackage();
  return (
    <>
      {!nok && <span className="key">{label || name}</span>}
      <span className="value">{value || pkg[name] || "-"}</span>
    </>
  );
}

const CssPackageTuple = css`
  color: black;
  box-sizing: border-box;
  padding: 0 5px;
  font-family: NoirPro-Light;
  letter-spacing: 1px;
  font-size: var(--tx-sm);

  .key {
    font-family: NoirPro-Regular;
  }

  .key::after {
    content: ":";
    margin: 0 5px 0 2px;
  }

  .value {
    // max-width: 180px;
    display: inline-block;
    word-break: break-all;
    overflow-wrap: anywhere;
  }
`;

const StylePackageTuple = styled.div`
  ${CssPackageTuple}
`;

function StyledPackageTuple({ name, label, value, nok, className, ...props }) {
  return (
    <StylePackageTuple className={className || ""} {...props}>
      <PackageTuple
        nok={nok}
        name={name}
        label={label}
        value={value}
        className={className || ""}
        {...props}
      />
    </StylePackageTuple>
  );
}

export { PackageTuple, CssPackageTuple, StylePackageTuple, StyledPackageTuple };

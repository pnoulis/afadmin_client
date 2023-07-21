import * as React from "react";
import styled, { css } from "styled-components";
import { useContextWristband } from "/src/contexts/index.js";

function WristbandTuple({ name = "", label = "", value = "" }) {
  const { wristband } = useContextWristband();
  return (
    <>
      <span className="key">{label || name}</span>
      <span className="value">{value || wristband[name]}</span>
    </>
  );
}

const CssWristbandTuple = css`
  color: black;
  box-sizing: border-box;
  width: max-content;
  height: max-content;
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
    font-size: var(--tx-xs);
  }
`;

const StyleWristbandTuple = styled.div`
  ${CssWristbandTuple}
`;

function StyledWristbandTuple({ name, label, value, className, ...props }) {
  return (
    <StyleWristbandTuple className={className || ""} {...props}>
      <WristbandTuple
        name={name}
        label={label}
        value={value}
        className={className || ""}
        {...props}
      />
    </StyleWristbandTuple>
  );
}

export {
  WristbandTuple,
  CssWristbandTuple,
  StyleWristbandTuple,
  StyledWristbandTuple,
};

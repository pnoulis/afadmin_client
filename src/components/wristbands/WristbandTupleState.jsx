import * as React from "react";
import styled, { css } from "styled-components";
import { useContextWristband } from "/src/contexts/index.js";
import { CssWristbandTuple } from "./WristbandTuple.jsx";

function WristbandTupleState({ label }) {
  const { wristband } = useContextWristband();
  return (
    <>
      <span className="key">{label || "status"}</span>
      <span className="value">{wristband.getState().name}</span>
    </>
  );
}

const CssWristbandTupleState = css`
  ${CssWristbandTuple}
  width: 150px;
  .value {
    font-size: var(--tx-nl);
    font-family: NoirPro-Medium;
    text-transform: initial;
    color: var(--info-base);
  }
`;

const StyleWristbandTupleState = styled.div`
  ${CssWristbandTupleState}
`;

function StyledWristbandTupleState({ label, className, ...props }) {
  return (
    <StyleWristbandTupleState className={className || ""} {...props}>
      <WristbandTupleState label={label} />
    </StyleWristbandTupleState>
  );
}

export {
  WristbandTupleState,
  CssWristbandTupleState,
  StyleWristbandTupleState,
  StyledWristbandTupleState,
};

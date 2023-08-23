// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { WidgetWristband } from "/src/components/widgets/index.js";
import { WristbandTuple } from "/src/components/wristbands/WristbandTuple.jsx";
import { WristbandTupleState } from "/src/components/wristbands/WristbandTupleState.jsx";

function WristbandInfoCard({ className, style }) {
  return (
    <WristbandInfoCardContainer className={className} style={style}>
      <StyledWristbandTuple style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}>
        <WristbandTuple name="id" label="rfid" />
      </StyledWristbandTuple>
      <StyledWristbandTupleState
        style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}
      >
        <WristbandTupleState />
      </StyledWristbandTupleState>
      <WidgetWristband
        size="20px"
        style={{ gridRow: "1 / 3", gridColumn: "2 / 3", justifySelf: "end" }}
      />
    </WristbandInfoCardContainer>
  );
}

const CssWristbandTuple = css`
  color: black;
  box-sizing: border-box;
  padding: 0 5px;
  letter-spacing: 1px;
  font-size: var(--tx-xs);
  font-family: Saira;

  .key {
    font-weight: 600;
  }

  .key::after {
    content: ":";
    margin: 0 5px 0 3px;
  }

  .value {
    font-size: var(--tx-xxs);
    word-break: break-all;
    overflow-wrap: anywhere;
  }
`;

const StyledWristbandTuple = styled("p")`
  ${CssWristbandTuple}
`;

const StyledWristbandTupleState = styled("p")`
  ${CssWristbandTuple}
  .value {
    font-size: var(--tx-sm);
    color: var(--info-base);
  }
`;

const WristbandInfoCardContainer = styled("article")`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  width: max-content;
  border-radius: var(--br-nl);
  display: grid;
  padding: 4px 12px;
  column-gap: 30px;
  align-items: center;
`;

export { WristbandInfoCard };

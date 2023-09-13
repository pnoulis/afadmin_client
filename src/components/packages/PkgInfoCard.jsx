// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PackageTuple } from "./PackageTuple.jsx";
import { PkgTupleCost } from "./PkgTupleCost.jsx";
import { PkgTupleTStart } from "./PkgTupleTStart.jsx";
import { PkgTupleTime } from "./PkgTupleTime.jsx";
import { PkgTupleAmount } from "./PkgTupleAmount.jsx";
import { PkgTupleRemainder } from "./PkgTupleRemainder.jsx";
import { PkgTupleState } from "./PkgTupleState.jsx";

function PkgInfoCard({ as, className, style, onClick }) {
  return (
    <StyledPkgInfoCard
      className={className}
      as={as}
      style={style}
      onClick={onClick}
    >
      <StyledPkgTuple
        className="state"
        style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}
      >
        <PkgTupleState />
      </StyledPkgTuple>
      <StyledPkgTuple style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}>
        <PackageTuple name="type" />
      </StyledPkgTuple>
      <StyledPkgTuple
        className="cost"
        style={{ gridRow: "3 / 4", gridColumn: "1 / 2" }}
      >
        <PkgTupleCost />
      </StyledPkgTuple>
      <StyledPkgTuple style={{ gridRow: " 4 / 5", gridColumn: "1 / 2" }}>
        <PkgTupleAmount label="purchased" />
      </StyledPkgTuple>
      <StyledPkgTuple style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}>
        <PkgTupleTStart />
      </StyledPkgTuple>
      <StyledPkgTuple style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}>
        <PkgTupleTime name="t_end" label="finished" />
      </StyledPkgTuple>
      <StyledPkgTuple style={{ gridRow: "3 / 4", gridColumn: "2 / 3" }}>
        <PkgTupleRemainder />
      </StyledPkgTuple>
    </StyledPkgInfoCard>
  );
}

const CssPkgTuple = css`
  color: black;
  box-sizing: border-box;
  padding: 0 5px;
  font-family: Saira;
  letter-spacing: 1px;
  font-size: var(--tx-nl);
  font-weight: 450;

  .key {
    display: inline-block;
    min-width: 115px;
    text-align: left;
  }

  .key::after {
    content: ":";
    margin: 0 6px 0 2px;
  }

  .value {
    display: inline-block;
    width: max-content;
    word-break: break-all;
    overflow-wrap: anywhere;
    font-weight: 450;
  }
`;

const StyledPkgTuple = styled("p")`
  ${CssPkgTuple}
`;

const StyledPkgInfoCard = styled("article")`
  position: relative;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  border-radius: var(--br-lg);
  padding: 12px;
  column-gap: 15px;
  row-gap: 6px;
  width: 600px;
  justify-content: space-around;
  align-items: center;

  ${StyledPkgTuple}.state .value {
    color: var(--info-medium);
  }

  ${StyledPkgTuple}.cost .value::after {
    font-size: var(--tx-md);
    content: "\u20AC";
    margin: 0 0 0 2px;
  }

  & sub {
    margin-left: 2px;
    font-size: var(--tx-xxs);
  }
`;

export {
  PkgInfoCard,
  StyledPkgTuple as StyledPkgInfoCardTuple,
  StyledPkgInfoCard,
};

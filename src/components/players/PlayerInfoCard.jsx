// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PlayerTuple } from "/src/components/players/PlayerTuple.jsx";
import { PlayerTupleFullname } from "/src/components/players/PlayerTupleFullname.jsx";
import { PlayerTupleState } from "/src/components/players/PlayerTupleState.jsx";
import { WristbandInfoCard } from "/src/components/wristbands/index.js";

function PlayerInfoCard({ className }) {
  return (
    <PlayerInfoCardContainer className={className}>
      <StyledPlayerTuple
        style={{ gridRow: "1 / 2", gridColumn: "1 / 2", alignSelf: "center" }}
      >
        <PlayerTupleFullname />
      </StyledPlayerTuple>
      <StyledPlayerTuple
        style={{ gridRow: "2 / 3", gridColumn: "1 / 2", alignSelf: "center" }}
      >
        <PlayerTuple name="username" />
      </StyledPlayerTuple>
      <StyledPlayerTuple
        style={{ gridRow: "3 / 4", gridColumn: "1 / 2", alignSelf: "center" }}
      >
        <PlayerTuple name="email" />
      </StyledPlayerTuple>
      <StyledPlayerTupleState
        style={{
          gridRow: "1 / 2",
          gridColumn: "2 / 3",
          justifySelf: "end",
          textAlign: "right",
        }}
      >
        <PlayerTupleState />
      </StyledPlayerTupleState>
      <WristbandInfoCard
        style={{
          gridRow: "2 / 4",
          gridColumn: "2 / 3",
          backgroundColor: "white",
          justifySelf: "end",
        }}
      />
    </PlayerInfoCardContainer>
  );
}

const CssPlayerTuple = css`
  color: black;
  box-sizing: border-box;
  padding: 0 5px;
  letter-spacing: 1px;
  font-size: var(--tx-xs);
  font-family: Saira;

  .key::after {
    content: ":";
    font-weight: 550;
    margin: 0 5px 0 3px;
  }

  .value {
    display: inline-block;
    word-break: break-all;
    overflow-wrap: anywhere;
  }
`;

const StyledPlayerTuple = styled("p")`
  ${CssPlayerTuple}
`;

const StyledPlayerTupleState = styled("p")`
  ${CssPlayerTuple}
  .value {
    font-size: var(--tx-sm);
    color: var(--info-base);
  }
`;

const PlayerInfoCardContainer = styled("article")`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--grey-subtle);
  border-radius: var(--br-lg);
  padding: 15px 20px 20px 20px;
  column-gap: 30px;
  align-items: start;
  row-gap: 5px;
  width: 600px;
`;

export { PlayerInfoCard };

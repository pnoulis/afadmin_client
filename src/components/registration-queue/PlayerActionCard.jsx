// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PlayerTuple } from "/src/components/players/index.js";
import { WidgetTrash, WidgetWristband } from "/src/components/widgets/index.js";
import { useContextWristband } from "/src/contexts/index.js";
import { useContextRegistrationQueue } from "./ContextRegistrationQueue.jsx";

function PlayerActionCard({ player }) {
  const { state, wristband } = useContextWristband();
  const { rmQueue } = useContextRegistrationQueue();

  return player.filler ? (
    <StyledPlayerActionCard style={{ alignContent: "center", opacity: 0.7 }}>
      <StyledPlayerTuple>
        <PlayerTuple nok name="username" />
      </StyledPlayerTuple>
    </StyledPlayerActionCard>
  ) : (
    <StyledPlayerActionCard>
      <StyledWidgetWristband
        wristbandColor={wristband.getColor()}
        pairing={state === "pairing"}
      />
      <StyledPlayerTuple>
        <PlayerTuple nok name="username" />
      </StyledPlayerTuple>
      <StyledWidgetTrash
        tooltipContent="remove player"
        onClick={rmQueue.bind(null, player)}
      />
    </StyledPlayerActionCard>
  );
}

const StyledPlayerActionCard = styled("li")`
  display: grid;
  background-color: var(--grey-light);
  grid-auto-columns: 1fr;
  grid-auto-rows: max-content;
  padding: 20px;
  aspect-ratio: 1 / 1.01;
  border-radius: var(--br-lg);
  justify-items: center;
  align-content: space-between;
`;

const CssPlayerTuple = css`
  color: black;
  box-sizing: border-box;
  padding: 0 5px;
  letter-spacing: 1px;
  font-size: var(--tx-xs);
  font-family: Saira;
  font-weight: 550;
  text-align: center;

  .key::after {
    content: ":";
    margin: 0 5px 0 3px;
  }

  .value {
    word-break: break-all;
    overflow-wrap: anywhere;
  }
`;

const StyledPlayerTuple = styled("p")`
  ${CssPlayerTuple}
`;

const StyledWidgetTrash = styled(WidgetTrash)`
  background-color: var(--primary-base);
  padding: 4px;
  width: 17px;
  height: 17px;
  svg {
    fill: white;
  }
`;

const StyledWidgetWristband = styled(WidgetWristband)`
  padding: 8px;
  width: 40px;
  height: 40px;
  svg {
    fill: var(--grey-strong);
  }
  background-color: ${({ wristbandColor, pairing }) =>
    !wristbandColor && !pairing && "white"};
`;

export { PlayerActionCard, StyledPlayerActionCard, StyledWidgetTrash };

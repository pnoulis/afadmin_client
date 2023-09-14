// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PlayerTuple } from "/src/components/players/index.js";
import { WristbandTuple } from "/src/components/wristbands/index.js";
import { WidgetWristband } from "/src/components/widgets/index.js";
import { useContextWristband } from "/src/contexts/index.js";

function TeamPlayerInfoCard({ className, style }) {
  const { wristband } = useContextWristband();
  return (
    <TeamPlayerInfoCardContainer className={className} style={style}>
      <StyledWidgetWristband wristbandColor={wristband.getColor()} />
      <StyledTeamPlayerTuple>
        <PlayerTuple nok name="username" />
      </StyledTeamPlayerTuple>
      <StyledTeamPlayerTuple>
        <WristbandTuple name="id" label="rfid" />
      </StyledTeamPlayerTuple>
    </TeamPlayerInfoCardContainer>
  );
}

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

const CssTeamPlayerTuple = css`
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

const StyledTeamPlayerTuple = styled("p")`
  ${CssTeamPlayerTuple}
`;

const TeamPlayerInfoCardContainer = styled("article")`
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

export { TeamPlayerInfoCard };

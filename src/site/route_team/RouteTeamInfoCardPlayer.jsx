import * as React from "react";
import styled from "styled-components";
import { StyledPlayerTuple, Player } from "/src/components/players/index.js";
import {
  IndicatorWristbandSignal,
  StyledWristbandTuple,
  Wristband,
} from "/src/components/wristbands/index.js";

function RouteTeamInfoCardPlayer({ player, className, ...props }) {
  return (
    <Player player={player}>
      <Wristband wristband={player.wristband}>
        <StyledLayout className={className || ""} {...props}>
          <StyledWristbandSignal />
          <StyledTuple nok name="username" />
          <StyledWristbandTuple name="id" label="rfid" />
        </StyledLayout>
      </Wristband>
    </Player>
  );
  return <StyledLayout></StyledLayout>;
}

const StyledLayout = styled.article`
  pointer-events: none;
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  background-color: var(--grey-subtle);
  border-radius: var(--br-lg);
  padding: 10px 12px;
  justify-items: center;
  justify-content: center;
  width: 190px;
  min-height: 200px;
  align-content: space-around;
`;

const StyledWristbandSignal = styled(IndicatorWristbandSignal)``;
const StyledTuple = styled(StyledPlayerTuple)`
  font-size: var(--tx-nl);
  font-family: NoirPro-Regular;
  height: max-content;
`;

export { RouteTeamInfoCardPlayer };

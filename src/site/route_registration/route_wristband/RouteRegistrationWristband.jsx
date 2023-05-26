import * as React from "react";
import styled from "styled-components";
import { ComboboxSearchPlayer } from "./select_player/ComboboxSearchPlayer.jsx";
import { ListPlayers } from "./pair_wristband/ListPlayers.jsx";
import { ReactComponent as WristbandIcon } from "agent_factory.shared/ui/icons/wristband_image.svg";

function RouteRegistrationWristband({ className, ...props }) {
  return (
    <StyleRouteRegistrationWristband className={className} {...props}>
      <StyleSelectPlayer>
        <ComboboxSearchPlayer />
      </StyleSelectPlayer>
      <StylePairWristband>
        <ListPlayers />
        <StyleWristbandIcon>
          <WristbandIcon />
        </StyleWristbandIcon>
      </StylePairWristband>
    </StyleRouteRegistrationWristband>
  );
}

const StyleRouteRegistrationWristband = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 1fr;
  grid-template-areas: "select_player pair_wristband";
  justify-items: end;
  align-items: start;
`;

const StyleSelectPlayer = styled.section`
  grid-area: select_player;
  width: 100%;
  height: 100%;
  padding: 15px 0 0 15px;
`;
const StylePairWristband = styled.section`
  grid-area: pair_wristband;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--grey-base);
  padding: 15px 15px;
  border-radius: var(--br-lg);
`;

const StyleWristbandIcon = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
  top: 50%;
  max-width: 400px;
  transform: translate(-45%, -40%);

  display: flex;
  justify-content: center;
  align-items: center;

  .handBracelet .circle {
    fill: var(--success-light);
  }

  z-index: 1;
`;

export { RouteRegistrationWristband };

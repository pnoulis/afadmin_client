import styled from "styled-components";
import {
  Player,
  ActionCardPlayerReference,
} from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";

const ActionCardPlayer = styled(ActionCardPlayerReference)`
  background-color: white;
  z-index: 2;
`;

function RegistrationQueuePlayer({ player }) {
  return (
    <Player player={player}>
      <Wristband wristband={player.wristband}>
        <ActionCardPlayer />
      </Wristband>
    </Player>
  );
}

export { RegistrationQueuePlayer };

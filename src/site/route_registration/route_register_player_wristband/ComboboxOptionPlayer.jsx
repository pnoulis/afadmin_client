import styled from "styled-components";
import {
  Player,
  InfoCardPlayerReference,
} from "/src/components/players/index.js";
import {
  Wristband,
  StyleInfoCardWristbandLayout,
} from "/src/components/wristbands/index.js";

const InfoCardPlayer = styled(InfoCardPlayerReference)`
  background-color: white;
  z-index: 2;

  ${StyleInfoCardWristbandLayout} {
    background-color: var(--grey-subtle) !important;
  }
`;

function ComboboxOptionPlayer({ option: player }) {
  return (
    <Player player={player}>
      <Wristband wristband={player.wristband}>
        <InfoCardPlayer />
      </Wristband>
    </Player>
  );
}

export { ComboboxOptionPlayer };

import styled from "styled-components";
import {
  Player,
  ActionCardPlayerReference,
} from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";

function ActionCardRegistrationQueue({ player, onPlayerRemove }) {
  return (
    <Player player={player}>
      <Wristband wristband={player.wristband}>
        <ActionCardPlayerReference
          style={{ backgroundColor: "white", zIndex: 2 }}
          onPlayerRemove={onPlayerRemove}
        />
      </Wristband>
    </Player>
  );
}

export { ActionCardRegistrationQueue };

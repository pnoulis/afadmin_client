import styled from "styled-components";
import { Afmachine } from "/src/app/afmachine.js";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { useContextPlayer } from "/src/contexts/index.js";
import { InfoCardPlayerReference } from "../components/players";
import {
  InfoCardWristbandLayout,
  StyleInfoCardWristbandLayout,
} from "../components/wristbands/index.js";
import "./scratch.css";

const players = new Array(3)
  .fill(null)
      .map((p) => Afmachine.createPlayer().fill(null, true));

function PlayerConsume() {
  const p = useContextPlayer();
  return (
    <div>
      <p>player number: {p.player.username}</p>
      <button onClick={() => p.player.fill()}> fill</button>
    </div>
  );
}

const InfoCard = styled(InfoCardPlayerReference)`
  background-color: white;

  ${StyleInfoCardWristbandLayout} {
    background-color: var(--grey-subtle) !important;
  }
`;

export default function ScratchPlayer() {
  return (
    <div>
      <h1>Scratch player</h1>
      <div className="container">
        {players.map((p, i) => (
          <Player player={p} key={i}>
            <Wristband wristband={p.wristband}>
              <InfoCard />
            </Wristband>
            <PlayerConsume />
          </Player>
        ))}
      </div>
    </div>
  );
}

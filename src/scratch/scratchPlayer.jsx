import { Player } from '/src/components/players/index.js';
import { Wristband } from '/src/components/wristbands/index.js';
import { useContextPlayer } from '/src/contexts/index.js';
import { InfoCardPlayerReference } from '../components/players';

function PlayerConsume() {
  const p = useContextPlayer();
  return (
    <div>
      <p>player number: {p.player.username}</p>
      <button onClick={() => p.player.fill()}> fill</button>
    </div>
  );
}

export default function ScratchPlayer() {
  return (
    <div>
      <h1>Scratch player</h1>
      <div>
        <Player>
          <Wristband>
            <InfoCardPlayerReference />
          </Wristband>
          <PlayerConsume/>
        </Player>
      </div>
    </div>
  );
}

import {
  Wristband,
  InfoCardWristbandReference,
} from "/src/components/wristbands/index.js";
import { useContextWristband } from "/src/contexts/index";

function WristbandConsume() {
  const w = useContextWristband();
  return (
    <div>
      <InfoCardWristbandReference />
      <button onClick={() => w.wristband.fill()}> fill</button>
      <button {...w.handleWristbandToggle()}> if clicked</button>
    </div>
  );
}

export default function ScratchWristband() {
  return (
    <div>
      <h1>scratch wristband</h1>
      <div>
        <Wristband>
          <WristbandConsume />
        </Wristband>
      </div>
    </div>
  );
}

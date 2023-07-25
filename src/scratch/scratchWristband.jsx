import { Afmachine } from '/src/app/afmachine.js';
import {
  Wristband,
  InfoCardWristbandReference,
  StyledWristbandTuple,
  WristbandTuple,
} from "/src/components/wristbands/index.js";
import { useContextWristband } from "/src/contexts/index";

const w = Afmachine.createWristband().fill();
console.log(w);
function WristbandConsume() {
  return (
    <div>
      <StyledWristbandTuple name="id" label="rfid"/>
      {/* <InfoCardWristbandReference /> */}
      {/* <button onClick={() => w.wristband.fill()}> fill</button> */}
      {/* <button {...w.handleWristbandToggle()}> if clicked</button> */}
    </div>
  );
}

export default function ScratchWristband() {
  return (
    <div>
      <h1>scratch wristband</h1>
      <div>
        <Wristband wristband={w}>
          <WristbandConsume />
        </Wristband>
      </div>
    </div>
  );
}

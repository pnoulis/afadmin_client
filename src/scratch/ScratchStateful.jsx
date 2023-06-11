import * as React from "react";
import styled from "styled-components";
import { useStateful, Wristband, logStateChange } from "../afmachine/index.js";
import {
  Wristband as WristbandParent,
  useContextWristband,
  StoreProvideWristband,
  WidgetPairWristband,
} from "../afm_components/wristbands/index.js";

const someWristband = new Wristband();

function WristbandChild({ ...props }) {
  const { state, wristband } = useContextWristband();
  return (
    <div>
      <br />
      <div>{state}</div>
      <WidgetPairWristband />
    </div>
  );
}

export default function ScratchStateful() {
  return (
    <div>
      <h1>Scratch stateful</h1>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("wristband pairing");
            someWristband.togglePairing();
          }}
        >
          pair wristband
        </button>
        <br />
        <WristbandParent wristband={someWristband}>
          <WristbandChild />
        </WristbandParent>
      </div>
    </div>
  );
}

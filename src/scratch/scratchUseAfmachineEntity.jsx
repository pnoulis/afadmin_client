import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { capitalize } from "js_utils/misc";
import { useAfmachineEntity } from "../hooks/index.js";
import { useWristband } from "/src/components/wristbands/useWristband2.jsx";

export default function scratchUseAfmachineState() {
  return (
    <div>
      <h1>scratch useAfmachineState</h1>
      <div>
        <div></div>
      </div>
    </div>
  );
}

import * as React from "react";
import { Afmachine } from "/src/app/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function useWristband(wristband, options) {
  const wristbandRef = React.useRef(wristband);
  if (wristbandRef.current == null) {
    wristbandRef.current = Afmachine.createLiveWristband();
  }
  const [state, id] = useAfmachineEntity(wristbandRef.current);

  const handleWristbandToggle = React.useCallback(
    function () {
      return {
        onClick: function (e) {
          e.preventDefault();
          wristbandRef.current.toggle();
          if (typeof options.onWristbandToggle === "function") {
            options.onWristbandToggle();
          }
        },
      };
    },
    [options.onWristbandToggle],
  );

  return {
    state,
    id,
    wristband: wristbandRef.current,
    handleWristbandToggle,
  };
}

export { useWristband };

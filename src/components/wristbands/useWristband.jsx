import * as React from "react";
import { Afmachine } from "/src/app/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function useWristband(wristband, options) {
  const [state, id] = useAfmachineEntity(wristband);

  const handleWristbandToggle = React.useCallback(
    function () {
      return {
        onClick: function (e) {
          e.preventDefault();
          wristband.toggle();
          if (typeof options.onWristbandToggle === "function") {
            options.onWristbandToggle();
          }
        },
      };
    },
    [options.onWristbandToggle],
  );

  React.useEffect(() => {
    () => wristband.inState("pairing") && wristband.toggle();
  }, []);

  return {
    state,
    id,
    wristband: wristband,
    handleWristbandToggle,
  };
}

export { useWristband };

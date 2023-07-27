import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function useWristband(wristband, options) {
  const [state, id] = useAfmachineEntity(wristband);

  const handleWristbandToggle = React.useCallback(
    () => ({
        onClick (e) {
          e.preventDefault();
          wristband.toggle();
          if (typeof options.onWristbandToggle === "function") {
            options.onWristbandToggle();
          }
        },
      }),
    [options.onWristbandToggle],
  );

  React.useEffect(() => {
    () => wristband.inState("pairing") && wristband.toggle();
  }, []);

  return {
    state,
    id,
    wristband,
    handleWristbandToggle,
  };
}

export { useWristband };

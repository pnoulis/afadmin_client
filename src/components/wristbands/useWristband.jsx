import * as React from "react";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";

function __createWristband(source) {
  return afmachine.createRegistableWristband(source);
}

function useWristband(
  source,
  {
    fill = false,
    depth = 0,
    createWristband = __createWristband,
    onWristbandToggle,
  } = {},
) {
  const {
    entity: wristband,
    state,
    id,
    create,
  } = useAfmachineEntity(source, createWristband, {
    fill,
    depth,
  });

  const handleWristbandToggle = React.useCallback(
    () => ({
      onClick(e) {
        e.preventDefault();
        if ("toggle" in wristband) {
          wristband.toggle((err) => {
            console.log(err);
          });
          if (typeof onWristbandToggle === "function") {
            onWristbandToggle();
          }
        }
      },
    }),
    [onWristbandToggle],
  );

  React.useEffect(() => {
    return () => wristband.inState("pairing") && wristband.toggle();
  }, []);

  return {
    state,
    wristband,
    id,
    handleWristbandToggle,
  };
}

export { useWristband };

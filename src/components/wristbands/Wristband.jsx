import * as React from "react";
import { ContextProvideWristband } from "/src/contexts/index.js";
import { useWristband } from "./useWristband.jsx";

/**
 * Wristband accepts the following options
 *
 * @param {class} wristband
 * @param {*} options
 * @param {function} options.onWristbandToggle
 */

function Wristband({ wristband: entity, children, ...options } = {}) {
  const wristband = useWristband(entity, options);
  return (
    <ContextProvideWristband ctx={wristband}>
      {children}
    </ContextProvideWristband>
  );
}

export { Wristband };

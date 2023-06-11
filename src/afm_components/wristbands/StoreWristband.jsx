import * as React from "react";
import { ContextProvideWristband } from "./ContextWristband.jsx";
import { useStateful } from "../../afmachine/index.js";

function StoreProvideWristband({ wristband, children }) {
  const store = useStoreWristband(wristband);
  return (
    <ContextProvideWristband wristband={store}>
      {children}
    </ContextProvideWristband>
  );
}

function useStoreWristband(wristband) {
  const state = useStateful(wristband).getState();

  const onToggleWristbandPairing = () => ({
    onClick: (e) => {
      e.preventDefault();
      wristband.togglePairing();
    },
  });

  return {
    state,
    wristband,
    onToggleWristbandPairing,
  };
}

export { StoreProvideWristband, useStoreWristband };

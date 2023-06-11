import * as React from "react";

const ContextWristband = React.createContext(null);

function ContextProvideWristband({ wristband, children }) {
  return (
    <ContextWristband.Provider value={wristband}>
      {children}
    </ContextWristband.Provider>
  );
}

function useContextWristband() {
  const ctx = React.useContext(ContextWristband);
  if (ctx == null) {
    throw new Error("ContextWristband is null");
  }
  return ctx;
}

export { ContextProvideWristband, useContextWristband };

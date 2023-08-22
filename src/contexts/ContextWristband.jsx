// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const ContextWristband = React.createContext(null);

function ContextProvideWristband({ ctx, children }) {
  return (
    <ContextWristband.Provider value={ctx}>
      {children}
    </ContextWristband.Provider>
  );
}

function useContextWristband() {
  const ctx = React.useContext(ContextWristband);
  if (ctx == null) {
    throw new Error("<ContextProvideWristband/> missing");
  }
  return ctx;
}

export { ContextProvideWristband, useContextWristband };

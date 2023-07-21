import * as React from "react";

const ContextPlayer = React.createContext(null);

function ContextProvidePlayer({ ctx, children }) {
  return (
    <ContextPlayer.Provider value={ctx}>{children}</ContextPlayer.Provider>
  );
}

function useContextPlayer() {
  const ctx = React.useContext(ContextPlayer);
  if (ctx == null) {
    throw new Error("<ContextProvidePlayer/> missing");
  }
  return ctx;
}

export { ContextProvidePlayer, useContextPlayer };

import * as React from "react";

const ContextPlayer = React.createContext(null);
function ContextProvidePlayer({ player, children }) {
  return (
    <ContextPlayer.Provider value={player}>{children}</ContextPlayer.Provider>
  );
}
function useContextPlayer() {
  const ctx = React.useContext(ContextPlayer);
  if (ctx == null) {
    throw new Error("ContextPlayer is null");
  }
  return ctx;
}

export { ContextProvidePlayer, useContextPlayer };

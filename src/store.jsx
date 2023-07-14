import * as React from "react";

const ContextPlayer = React.createContext(null);

function ContextProvidePlayer({ value, children }) {
  return (
    <ContextPlayer.Provider value={value}>
      {children}
    </ContextPlayer.Provider>
  );
}

function useContextPlayer() {
  const ctx = React.useContext(ContextPlayer);
  return ctx;
}

export { ContextProvidePlayer, useContextPlayer };

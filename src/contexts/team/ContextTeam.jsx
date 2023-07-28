import * as React from "react";

const ContextTeam = React.createContext(null);

function ContextProvideTeam({ ctx, children }) {
  return <ContextTeam.Provider value={ctx}>{children}</ContextTeam.Provider>;
}

function useContextTeam() {
  const ctx = React.useContext(ContextTeam);
  if (ctx == null) {
    throw new Error("<ContextProvideTeam/> missing");
  }
  return ctx;
}

export { ContextProvideTeam, useContextTeam };

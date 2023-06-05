import * as React from "react";
import { TEAM_SCHEMA } from "agent_factory.shared/schemas.js";

const ContextTeam = React.createContext(null);

function ContextProvideTeam({ team, useSchema, children }) {
  return (
    <ContextTeam.Provider
      value={
        useSchema
          ? {
              ...TEAM_SCHEMA,
              ...team,
            }
          : team
      }
    >
      {children}
    </ContextTeam.Provider>
  );
}

function useContextTeam() {
  const ctx = React.useContext(ContextTeam);
  if (ctx == null) {
    throw new Error("ContextTeam is null");
  }
  return ctx;
}

export { ContextProvideTeam, useContextTeam };

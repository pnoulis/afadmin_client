import * as React from "react";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";

const ContextPlayer = React.createContext(null);

function ContextProvidePlayer({ player, useSchema, children }) {
  React.useEffect(() => {}, [player]);

  return (
    <ContextPlayer.Provider
      value={
        useSchema
          ? {
              ...PLAYER_SCHEMA,
              ...player,
            }
          : player
      }
    >
      {children}
    </ContextPlayer.Provider>
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

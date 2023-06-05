import * as React from "react";
import { ContextProvideTeam, useStoreTeam } from "/src/stores/team/index.js";

function StoreProvideGroupTeam({ children }) {
  const team = useStoreGroupTeam();
  return (
    <ContextProvideTeam useSchema team={team}>
      {children}
    </ContextProvideTeam>
  );
}

function useStoreGroupTeam(config) {
  const team = useStoreTeam(config);
  return team;
}

export { StoreProvideGroupTeam, useStoreGroupTeam };

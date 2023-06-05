import * as React from "react";
import { useStoreTeam, ContextProvideTeam } from "/src/stores/team/index.js";

function Team({ team: config, children }) {
  const team = useStoreTeam(config);
  return (
    <ContextProvideTeam useSchema team={team}>
      {children}
    </ContextProvideTeam>
  );
}

export { Team };

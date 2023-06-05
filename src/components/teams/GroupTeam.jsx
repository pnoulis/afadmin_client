import * as React from "react";
import { useStoreGroupTeam } from "/src/stores/group_team/index.js";
import { ContextProvideTeam } from "/src/stores/team/index.js";

function GroupTeam({ groupTeam: config, children }) {
  const groupTeam = useStoreGroupTeam(config);
  return (
    <ContextProvideTeam useSchema team={groupTeam}>
      {children}
    </ContextProvideTeam>
  );
}

export { GroupTeam };

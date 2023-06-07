import * as React from "react";
import { StoreProvideTeamClass } from "/src/stores/team/index.js";

function GroupTeamClass({ groupTeam, children, ...props }) {
  return (
    <StoreProvideTeamClass team={groupTeam} {...props}>
      {children}
    </StoreProvideTeamClass>
  );
}

export { GroupTeamClass };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { displaypoperr } from "/src/utils/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { useGroupPartyTeam } from "/src/components/teams/index.js";
import { GPTeamActionCard } from "/src/components/group-party/index.js";
import { ActionReplace } from "/src/components/async/index.js";

function GPTeam({ team, onRemoveGPTeam }) {
  const [failedMerge, setFailedMerge] = React.useState(false);
  const ctx = useGroupPartyTeam(team, { onRemoveGPTeam });
  return (
    <ContextProvideTeam key={ctx.id} ctx={ctx}>
      <ActionReplace
        action={ctx.team.merge}
        timePending={500}
        onSettled={(resolved, response) => {
          if (!resolved) {
            setFailedMerge(true);
            displaypoperr(response);
          } else {
            setFailedMerged(false);
          }
        }}
      >
        <GPTeamActionCard failedMerge={failedMerge} />
      </ActionReplace>
    </ContextProvideTeam>
  );
}

export { GPTeam };

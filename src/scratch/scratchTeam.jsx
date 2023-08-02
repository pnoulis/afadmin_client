import * as React from "react";
import { Player } from "/src/components/players/index.js";
import { Wristband } from "/src/components/wristbands/index.js";
import { useTeam } from "/src/components/teams/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { afmachine, logPlayer } from "/src/services/afmachine.js";
import { smallid } from "js_utils/uuid";
import { StyledFormTeamName } from "/src/components/forms/index.js";

function createTeam(team) {
  return afmachine.createPersistentTeam(team);
}

function Team() {
  const ctx = useTeam(null, { createTeam });
  const { team, roster } = ctx;

  React.useEffect(() => {}, []);
  return (
    <ContextProvideTeam ctx={ctx}>
      <p>{team.name}</p>
      <Player player={roster[0]} />
      <Wristband wristband={roster[0].wristband} />
    </ContextProvideTeam>
  );
}
export default function ScratchTeam() {
  return (
    <div>
      <h1>scratch team</h1>
      <div>
        <Team />
      </div>
    </div>
  );
}

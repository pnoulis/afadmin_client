import * as React from "react";
import { useCtxGroupParty } from "/src/stores/index.js";
import { ListTeams } from "./ListTeams.jsx";
import { CardTeam } from "./CardTeam.jsx";

function RouteGroupPartyIndex() {
  const { teams } = useCtxGroupParty();
  return (
    <div>
      <ListTeams>
        {teams.map((team) => (
          <CardTeam key={team.name} team={team} />
        ))}
      </ListTeams>
    </div>
  );
}

export { RouteGroupPartyIndex };

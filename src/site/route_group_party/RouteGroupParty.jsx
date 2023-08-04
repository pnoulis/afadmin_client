import * as React from "react";
import { Outlet } from "react-router-dom";
import { PanelGroupParty } from "./PanelGroupParty.jsx";
import { ContextProvideGroupParty } from "/src/contexts/index.js";
import { useGroupParty } from "/src/components/group_party/index.js";
import { GroupPartyTeams } from "./GroupPartyTeams.jsx";
import { FormGroupTeamSize } from "/src/components/forms/index.js";

function RouteGroupParty() {
  const ctx = useGroupParty();
  const {
    groupParty,
    teams,
    removeTeam,
    addTeam,
    distributeTeam,
    getTeamSize,
    newGroupParty,
    mergeGroupParty,
  } = ctx;

  return (
    <ContextProvideGroupParty ctx={ctx}>
      <PanelGroupParty
        onMergeGroupParty={mergeGroupParty}
        onNewGroupParty={newGroupParty}
        onTeamAdd={addTeam}
        onTeamDistribute={distributeTeam}
      >
        {teams.length > 0 ? (
          <GroupPartyTeams teams={teams} onTeamRemove={removeTeam} />
        ) : (
          <div className="centerfull">
            <FormGroupTeamSize onSubmit={getTeamSize} />
          </div>
        )}
      </PanelGroupParty>
    </ContextProvideGroupParty>
  );
}

export { RouteGroupParty };

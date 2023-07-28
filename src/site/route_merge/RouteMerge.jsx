import * as React from "react";
import { Outlet } from "react-router-dom";
import { StoreProvideMerge } from "/src/stores/index.js";
import { PanelMerge } from "./PanelMerge.jsx";
import { useTeam } from "/src/components/teams/index.js";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { afmachine } from "/src/services/afmachine.js";

function createTeam(team) {
  return afmachine.createRegularTeam(team);
}

function RouteMerge() {
  const team = useTeam(null, { createTeam });
  return (
    <ContextProvideTeam ctx={team}>
      <PanelMerge onMergeTeam={team.mergeTeam}>
        <Outlet />
      </PanelMerge>
    </ContextProvideTeam>
  );
}

export { RouteMerge };

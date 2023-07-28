import * as React from "react";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { useTeam } from "./useTeam.jsx";

function Team({ team: entity, children, ...options }) {
  const team = useTeam(entity, options);
  return <ContextProvideTeam ctx={team}>{children}</ContextProvideTeam>;
}

export { Team };

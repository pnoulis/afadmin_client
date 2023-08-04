import * as React from "react";
import { ContextProvideTeam } from "/src/contexts/index.js";
import { useTeam } from "./useTeam.jsx";

function Team({ team, children, ...options }) {
  const ctx = useTeam(team, options);
  return <ContextProvideTeam ctx={ctx}>{children}</ContextProvideTeam>;
}

export { Team };

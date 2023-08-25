import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadTeams() {
  return defer({ teams: afmachine.listTeams() });
}

export { loadTeams };

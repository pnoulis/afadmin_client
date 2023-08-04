import { afmachine } from "afmachine/src/index.js";
import { defer } from "react-router-dom";

function loadTeams() {
  return defer({ teams: afmachine.listTeams() });
}

export { loadTeams };

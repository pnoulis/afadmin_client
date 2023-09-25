import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadAllPlayers() {
  return defer({ players: afmachine.listAllPlayers() });
}

export { loadAllPlayers };

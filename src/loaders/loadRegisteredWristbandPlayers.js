import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadRegisteredWristbandPlayers() {
  return defer({ players: afmachine.listRegisteredWristbandPlayers() });
}

export { loadRegisteredWristbandPlayers };

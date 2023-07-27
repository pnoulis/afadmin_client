import { afmachine } from "afmachine/src/index.js";
import { defer } from "react-router-dom";
import { delay } from "js_utils/misc";

function loadRegisteredWristbandPlayers() {
  return defer({ players: afmachine.listRegisteredWristbandPlayers() });
}

export { loadRegisteredWristbandPlayers };

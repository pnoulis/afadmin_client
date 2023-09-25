import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadScoreboardTeams() {
  return defer({
    scoreboard: afmachine.listScoreboardTeams().then((scores) => {
      return afmachine.listTeams().then((teams) => ({
        scores,
        teams,
      }));
    }),
  });
}

export { loadScoreboardTeams };

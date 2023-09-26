import { afmachine } from "/src/services/afmachine/afmachine.js";
import { defer } from "react-router-dom";

function loadScoreboardDevices() {
  return defer({
    scoreboardDevices: afmachine.listScoreboardDevices().then((devices) =>
      afmachine.listScoreboardViews().then((views) => ({
        devices,
        views,
      })),
    ),
  });
}

export { loadScoreboardDevices };

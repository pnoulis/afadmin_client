import registerPlayer from "./controllers/registerPlayer.jsx";
import loginPlayer from "./controllers/loginPlayer.jsx";
import unregisterWristband from "./controllers/unregisterWristband.jsx";
import toggleWristbandPairing from "./controllers/toggleWristbandPairing.jsx";
import registerWristband from "./controllers/registerWristband.jsx";
import searchPlayer from "./controllers/searchPlayer.jsx";
import addPlayerWristbandRegistrationQueue from "./controllers/addPlayerWristbandRegistrationQueue.jsx";
import removePlayerWristbandRegistrationQueue from "./controllers/removePlayerWristbandRegistrationQueue.jsx";
import listRegisteredPlayers from "./controllers/listRegisteredPlayers.jsx";
import listAvailablePlayers from "./controllers/listAvailablePlayers.jsx";
import addPlayerMergeTeamStagingArea from "./controllers/AddPlayerMergeTeamStagingArea.jsx";
import createTeam from "./controllers/createTeam.jsx";
import listTeams from "./controllers/listTeams.jsx";
import generateGroupPlayers from "./controllers/generateGroupPlayers.jsx";
import registerWristbandScanListener from "./controllers/registerWristbandScanListener.jsx";

const getControllers = (app) => ({
  ...registerPlayer(app),
  ...loginPlayer(app),
  ...unregisterWristband(app),
  ...registerWristband(app),
  ...toggleWristbandPairing(app),
  ...searchPlayer(app),
  ...addPlayerWristbandRegistrationQueue(app),
  ...removePlayerWristbandRegistrationQueue(app),
  ...listRegisteredPlayers(app),
  ...listAvailablePlayers(app),
  ...addPlayerMergeTeamStagingArea(app),
  ...createTeam(app),
  ...listTeams(app),
  ...generateGroupPlayers(app),
  ...registerWristbandScanListener(app),
});

export { getControllers };

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
import ensureUniqueWristbandColor from "./controllers/ensureUniqueWristbandColor.jsx";
import validateWristband from "./controllers/validateWristband.jsx";
import createGroupPartyTeam from "./controllers/createGroupPartyTeam.jsx";
import listPackages from "./controllers/listPackages.jsx";
import addTeamPackage from "./controllers/addTeamPackage.jsx";
import removePackage from "./controllers/removeTeamPackage.jsx";
import startTeam from "./controllers/startTeam.jsx";
import stopTeam from "./controllers/stopTeam.jsx";

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
  ...ensureUniqueWristbandColor(app),
  ...validateWristband(app),
  ...createGroupPartyTeam(app),
  ...listPackages(app),
  ...addTeamPackage(app),
  ...removePackage(app),
  ...startTeam(app),
  ...stopTeam(app),
});

export { getControllers };

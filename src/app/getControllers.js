/*
  SUBSCRIPTIONS
 */
import subscribeWristbandScan from "./controllers/subscribeWristbandScan.jsx";
import subscribeWristbandRegistration from "./controllers/subscribeWristbandRegistration.jsx";
import subscribeWristbandUnregistration from "./controllers/subscribeWristbandUnregistration.jsx";

/*
  ACTIONS
 */
import registerPlayer from "./controllers/registerPlayer.jsx";
import searchPlayer from "./controllers/searchPlayer.jsx";
import registerWristband from "./controllers/registerWristband.jsx";
import unregisterWristband from "./controllers/unregisterWristband.jsx";
import toggleWristbandPairing from "./controllers/toggleWristbandPairing.jsx";
import addPlayerWristbandRegistrationQueue from "./controllers/addPlayerWristbandRegistrationQueue.jsx";
import removePlayerWristbandRegistrationQueue from "./controllers/removePlayerWristbandRegistrationQueue.jsx";
import validateWristband from "./controllers/validateWristband.jsx";
import addPlayerTeamRoster from "./controllers/addPlayerTeamRoster.jsx";
import removePlayerTeamRoster from "./controllers/removePlayerTeamRoster.jsx";

const getControllers = (appRef) => ({
  ...subscribeWristbandScan(appRef),
  ...subscribeWristbandRegistration(appRef),
  ...subscribeWristbandUnregistration(appRef),
  ...registerPlayer(appRef),
  ...searchPlayer(appRef),
  ...registerWristband(appRef),
  ...unregisterWristband(appRef),
  ...toggleWristbandPairing(appRef),
  ...addPlayerWristbandRegistrationQueue(appRef),
  ...removePlayerWristbandRegistrationQueue(appRef),
  ...validateWristband(appRef),
  ...addPlayerTeamRoster(appRef),
  ...removePlayerTeamRoster(appRef),
});

export { getControllers };

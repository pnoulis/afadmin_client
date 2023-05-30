import subscribeWristbandScan from "./controllers/subscribeWristbandScan.jsx";
import registerPlayer from "./controllers/registerPlayer.jsx";
import searchPlayer from "./controllers/searchPlayer.jsx";
import registerWristband from "./controllers/registerPlayer.jsx";
import unregisterWristband from "./controllers/unregisterWristband.jsx";
import toggleWristbandPairing from "./controllers/toggleWristbandPairing.jsx";
import addPlayerWristbandRegistrationQueue from "./controllers/addPlayerWristbandRegistrationQueue.jsx";
import validateWristband from "./controllers/validateWristband.jsx";

const getControllers = (appRef) => ({
  ...subscribeWristbandScan(appRef),
  ...registerPlayer(appRef),
  ...searchPlayer(appRef),
  ...registerWristband(appRef),
  ...unregisterWristband(appRef),
  ...toggleWristbandPairing(appRef),
  ...addPlayerWristbandRegistrationQueue(appRef),
  ...validateWristband(appRef),
});

export { getControllers };

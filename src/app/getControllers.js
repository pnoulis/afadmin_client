import getRegisterPlayer from "./controllers/registerPlayer.jsx";
import getLoginPlayer from "./controllers/loginPlayer.jsx";
import getSelectPlayerWristbandRegistration from "./controllers/selectPlayerWristbandRegistration.jsx";
import getUnregisterWristband from "./controllers/unregisterWristband.jsx";
import getToggleWristbandPairing from "./controllers/toggleWristbandPairing.jsx";
import getRegisterWristband from "./controllers/registerWristband.jsx";
import getSearchPlayer from "./controllers/searchPlayer.jsx";

const getControllers = (app) => ({
  ...getRegisterPlayer(app),
  ...getLoginPlayer(app),
  ...getUnregisterWristband(app),
  ...getRegisterWristband(app),
  ...getSelectPlayerWristbandRegistration(app),
  ...getToggleWristbandPairing(app),
  ...getSearchPlayer(app),
});

export { getControllers };

import subscribeWristbandScan from "./controllers/subscribeWristbandScan.jsx";
import registerPlayer from "./controllers/registerPlayer.jsx";
import searchPlayer from "./controllers/searchPlayer.jsx";

const getControllers = (appRef) => ({
  ...subscribeWristbandScan(appRef),
  ...registerPlayer(appRef),
  ...searchPlayer(appRef),
});

export { getControllers };

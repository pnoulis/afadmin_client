import subscribeWristbandScan from "./controllers/subscribeWristbandScan.jsx";
import registerPlayer from "./controllers/registerPlayer.jsx";

const getControllers = (appRef) => ({
  ...subscribeWristbandScan(appRef),
  ...registerPlayer(appRef),
});

export { getControllers };

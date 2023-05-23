import subscribeWristbandScan from "./controllers/subscribeWristbandScan.jsx";

function getControllers(appRef) {
  return {
    ...subscribeWristbandScan(appRef),
  };
}
export { getControllers };

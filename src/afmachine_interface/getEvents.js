import getListPlayers from "./events/listPlayers.jsx";
import getLoginPlayer from "./events/loginPlayer.jsx";
import getRegisterPlayer from "./events/registerPlayer.jsx";
import getSearchPlayer from "./events/searchPlayer.jsx";
import getListenWristbandScan from "./events/pairWristbandPlayer.jsx";
import getRegisterWristband from "./events/registerWristband.jsx";
import getUnregisterWristband from "./events/unregisterWristband.jsx";

const getEvents = (Afmachine) => ({
  ...getLoginPlayer(Afmachine),
  ...getRegisterPlayer(Afmachine),
  ...getListPlayers(Afmachine),
  ...getSearchPlayer(Afmachine),
  ...getListenWristbandScan(Afmachine),
  ...getRegisterWristband(Afmachine),
  ...getUnregisterWristband(Afmachine),
});

export { getEvents };

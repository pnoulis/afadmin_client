import getListPlayers from "./events/listPlayers.jsx";
import getLoginPlayer from "./events/loginPlayer.jsx";
import getRegisterPlayer from "./events/registerPlayer.jsx";

const getEvents = (Afmachine) => {
  return {
    ...getLoginPlayer(Afmachine),
    ...getRegisterPlayer(Afmachine),
    ...getListPlayers(Afmachine),
  };
};

export { getEvents };

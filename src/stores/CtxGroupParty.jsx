import * as React from "react";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";
import { generateRandomName } from "js_utils";

const CtxGroupParty = React.createContext(null);
const useCtxGroupParty = () => {
  const ctx = React.useContext(CtxGroupParty);
  if (ctx == null) {
    throw new Error("<ProvideCtxGroupParty/> missing");
  }
  return ctx;
};
const ProvideCtxGroupParty = ({ value, children }) => (
  <CtxGroupParty.Provider value={value}>{children}</CtxGroupParty.Provider>
);
const useModelGroupParty = () => {
  const groupPartySizeRef = React.useRef(0);
  const generateGroupPartyTeam = () => ({
    name: generateRandomName(),
    roster: new Array(MAX_TEAM_SIZE).fill(null).map(() => ({
      ...PLAYER_SCHEMA,
      username: `player_${++groupPartySizeRef.current}`,
    })),
  });
  const [modelGroupParty, setModelGroupParty] = React.useState(() => ({
    teams: [generateGroupPartyTeam()],
  }));
  const modelGroupPartyRef = React.useRef(null);
  modelGroupPartyRef.current = modelGroupParty;

  const resetGroupPartySize = (groupParty) => {
    groupPartySizeRef.current = 0;
    return groupParty.map((team) => ({
      ...team,
      roster: team.roster.map((player) => ({
        ...player,
        username: `player_${++groupPartySizeRef.current}`,
      })),
    }));
  };

  const removeGroupPartyTeam = (groupParty, team) => {
    return resetGroupPartySize(
      groupParty.filter((_) => _?.name !== team?.name)
    );
  };

  const removeRosterPlayer = (groupParty, team, player) => {
    return resetGroupPartySize(
      groupParty.map((_) =>
        _?.name === team.name
          ? {
              ...team,
              roster: team.roster.filter(
                (position) => position?.username !== player?.username
              ),
            }
          : _
      )
    );
  };

  const addRosterPlayer = (groupParty, team) => {
    const teamIsFull = team.roster.length === MAX_TEAM_SIZE;

    if (teamIsFull) {
      return groupParty;
    }

    return resetGroupPartySize(
      groupParty.map((_) =>
        _?.name === team?.name
          ? {
              ...team,
              roster: [...team?.roster, PLAYER_SCHEMA],
            }
          : _
      )
    );
  };

  return {
    ...modelGroupParty,
    setModelGroupParty,
    generateGroupPartyTeam,
    removeGroupPartyTeam,
    removeRosterPlayer,
    addRosterPlayer,
    modelGroupPartyRef,
  };
};
function ProvideStoreGroupParty({ children }) {
  const model = useModelGroupParty();
  return <ProvideCtxGroupParty value={model}>{children}</ProvideCtxGroupParty>;
}

export { useCtxGroupParty, ProvideStoreGroupParty };

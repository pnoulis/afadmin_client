import * as React from "react";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";
import { generateRandomName } from "js_utils";
import { useAppCtx } from "/src/app/index.js";

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
  const { createGroupPartyTeam } = useAppCtx();
  const generateGroupPartyTeam = () => {
    const id = Math.random().toString(16).slice(2, 8);
    return {
      name: generateRandomName(),
      id,
      roster: new Array(MAX_TEAM_SIZE).fill(null).map((_, i) => ({
        ...PLAYER_SCHEMA,
        wristband: {
          ...PLAYER_SCHEMA.wristband,
        },
        username: `${id}_${i + 1}`,
      })),
    };
  };
  const [modelGroupParty, setModelGroupParty] = React.useState(() => ({
    merging: false,
    teams: [generateGroupPartyTeam()],
  }));
  const modelGroupPartyRef = React.useRef(null);
  modelGroupPartyRef.current = modelGroupParty;

  const resetGroupPartySize = (groupParty) => {
    return groupParty.map((team) => ({
      ...team,
      roster: team.roster.map((player, i) => ({
        ...player,
        username: `${team.id}_${i + 1}`,
      })),
    }));
  };

  const removeGroupPartyTeam = (groupParty, team) => {
    return resetGroupPartySize(
      groupParty.filter((_) => _?.name !== team?.name)
    );
  };

  const removeRosterPlayer = (groupParty, team, player) => {
    const newRoster = team.roster.filter(
      (position) => position?.username !== player?.username
    );

    if (newRoster.length > 1) {
      return resetGroupPartySize(
        groupParty.map((_) =>
          _?.name === team.name
            ? {
                ...team,
                roster: newRoster,
              }
            : _
        )
      );
    } else {
      return groupParty;
    }
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

  const changeTeamName = (groupParty, team, teamName) =>
    groupParty.map((_team) =>
      _team?.name === team.name
        ? {
            ...team,
            customName: teamName,
          }
        : _team
    );

  const hasValidWristbands = (team) =>
    team.roster.every((player) => !!player.wristband.wristbandNumber);

  const addGroupPartyTeam = () => {
    setModelGroupParty({
      teams: [...modelGroupPartyRef.current.teams, generateGroupPartyTeam()],
    });
  };

  const initMergingSequence = async () => {
    const { teams } = modelGroupPartyRef.current;
    setModelGroupParty({
      teams,
      merging: true,
    });

    for (let i = 0; i < teams.length; i++) {
      try {
        setModelGroupParty({
          merging: true,
          teams: modelGroupPartyRef.current.teams.map((team) =>
            team.name === teams[i].name
              ? {
                  ...teams[i],
                  mergedStatus: "merging",
                }
              : team
          ),
        });
        const res = await createGroupPartyTeam(teams[i]);
        setModelGroupParty({
          merging: true,
          teams: modelGroupPartyRef.current.teams.map((team) =>
            team.name === teams[i].name
              ? {
                  ...teams[i],
                  mergedStatus: "merged",
                }
              : team
          ),
        });

        console.log(res);
      } catch (err) {
        console.log(err);
        setModelGroupParty({
          merging: true,
          teams: modelGroupPartyRef.current.teams.map((team) =>
            team.name === teams[i].name
              ? {
                  ...teams[i],
                  mergedStatus: "failed",
                }
              : team
          ),
        });
      }
    }

    console.log("dooooone");

    // if (!teams.every(hasValidWristbands)) {
    //   console.log("group party is not ready");
    // } else {
    //   console.log("group party is ready");
    //   setModelGroupParty({
    //     merging: true,
    //     teams,
    //   });
    // }
  };

  // const createGroupPartyTeam = (team) => {
  //   const { teams } = modelGroupPartyRef.current;
  //   if (!teams.every(hasValidWristbands)) {
  //     console.log("group party is not ready");
  //   } else {
  //     console.log("group party is ready");
  //     setModelGroupParty({
  //       merging: true,
  //       teams,
  //     });
  //   }
  // };

  return {
    ...modelGroupParty,
    setModelGroupParty,
    generateGroupPartyTeam,
    removeGroupPartyTeam,
    removeRosterPlayer,
    addRosterPlayer,
    changeTeamName,
    addGroupPartyTeam,
    initMergingSequence,
    modelGroupPartyRef,
  };
};
function ProvideStoreGroupParty({ children }) {
  const model = useModelGroupParty();
  return <ProvideCtxGroupParty value={model}>{children}</ProvideCtxGroupParty>;
}

export { useCtxGroupParty, ProvideStoreGroupParty };

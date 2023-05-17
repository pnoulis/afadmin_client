import * as React from "react";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import { PLAYER_SCHEMA } from "agent_factory.shared/schemas.js";
import { generateRandomName } from "js_utils";
import { useAppCtx } from "/src/app/index.js";
import styled from "styled-components";
import {
  ConfirmationDialog,
  ConfirmationDialogHeading,
  ConfirmationDialogDescription,
  ConfirmationDialogClose,
  ConfirmationDialogConfirm,
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs";
import { InputDialogNewGroupParty } from "/src/site/route_group_party/route_index/InputDialogNewGroupParty.jsx";

const StyleAlertDialog = styled(AlertDialog)`
  width: 600px;
`;

function AlertEmptyGroupParty({ handleClose }) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge group party</AlertDialogHeading>
      <AlertDialogDescription>
        group party is empty. Aborting...
      </AlertDialogDescription>
    </StyleAlertDialog>
  );
}

function AlertUnpairedWristbands({ teamName, handleClose }) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge group party</AlertDialogHeading>
      <AlertDialogDescription>
        Unpaired wristbands in {teamName}. Aborting...
      </AlertDialogDescription>
    </StyleAlertDialog>
  );
}

function AlertMergeSequenceSuccess({ handleClose }) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge group party</AlertDialogHeading>
      <AlertDialogDescription>Group party complete!</AlertDialogDescription>
    </StyleAlertDialog>
  );
}

function AlertMergeSequenceFail({ teamName, handleClose }) {
  return (
    <StyleAlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge group party</AlertDialogHeading>
      <AlertDialogDescription>
        {teamName} failed to merge. Aborting...
      </AlertDialogDescription>
    </StyleAlertDialog>
  );
}

const StyleConfirmationDialog = styled(ConfirmationDialog)`
  width: 600px;
`;

const StyleConfirmationDialogDescription = styled(
  ConfirmationDialogDescription
)`
  box-sizing: border-box;
  color: var(--primary-medium);
  font-family: NoirPro-SemiBold;
  font-size: var(--tx-md);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  margin-top: 30px;
  text-align: center;
`;

function ConfirmDiscardGroupParty({ handleClose }) {
  return (
    <StyleConfirmationDialog
      initialOpen
      onClose={handleClose}
      style={{ wdith: "600px" }}
    >
      <ConfirmationDialogHeading>new group party</ConfirmationDialogHeading>
      <StyleConfirmationDialogDescription>
        The current group party is not complete. discard?
      </StyleConfirmationDialogDescription>
      <ConfirmationDialogClose tabIndex={0}>cancel</ConfirmationDialogClose>
      <ConfirmationDialogConfirm>discard</ConfirmationDialogConfirm>
    </StyleConfirmationDialog>
  );
}

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
  const [mergingTeamTracker, setMergingTeamTracker] = React.useState(null);
  const { createGroupPartyTeam } = useAppCtx();
  const generateGroupPartyTeam = () => {
    const id = Math.random().toString(16).slice(2, 8);
    return {
      name: `${generateRandomName()}_${id}`,
      mergedStatus: "unmerged",
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

  const initMergingSequence = () => {
    // dialog here
    if (modelGroupPartyRef.current.teams.length < 1) {
      renderDialog(null, AlertEmptyGroupParty);
      return;
    }

    const teamToMerge = modelGroupPartyRef.current.teams.findIndex(
      ({ mergedStatus }) =>
        mergedStatus === "unmerged" || mergedStatus === "failed"
    );

    if (teamToMerge > -1) {
      setMergingTeamTracker(teamToMerge);
      setModelGroupParty({
        merging: true,
        teams: modelGroupPartyRef.current.teams.map((team, i) =>
          i === teamToMerge
            ? {
                ...team,
                mergedStatus: "merging",
              }
            : team
        ),
      });
    } else {
      renderDialog(null, AlertMergeSequenceSuccess);
    }
  };

  const nextTeamToMerge = () => {
    const next = modelGroupPartyRef.current.teams.findIndex(
      ({ mergedStatus }, i) =>
        i !== mergingTeamTracker && mergedStatus !== "merged"
    );

    return next;
  };

  React.useEffect(() => {
    if (!modelGroupParty.merging && mergingTeamTracker == null) return;
    const mergingTeam = modelGroupPartyRef.current.teams[mergingTeamTracker];

    if (!mergingTeam) {
      console.log("ERROR COULD NOT LOCATE MERGING TEAM");
    }

    if (!hasValidWristbands(mergingTeam)) {
      setTimeout(() => {
        renderDialog(null, AlertUnpairedWristbands, {
          teamName: mergingTeam.name,
        });
        setMergingTeamTracker(null);
        setModelGroupParty({
          merging: false,
          teams: modelGroupPartyRef.current.teams.map((team) =>
            team.name === mergingTeam.name
              ? {
                  ...team,
                  mergedStatus: "failed",
                }
              : team
          ),
        });
      }, 1000);
    } else {
      setTimeout(() => {
        createGroupPartyTeam(mergingTeam)
          .then((res) => {
            const next = nextTeamToMerge();

            if (next < 0) {
              renderDialog(null, AlertMergeSequenceSuccess);
              setModelGroupParty({
                teams: modelGroupPartyRef.current.teams.map((team, i) => {
                  if (i === mergingTeamTracker) {
                    return {
                      ...team,
                      mergedStatus: "merged",
                    };
                  } else return team;
                }),
                merging: false,
              });
              setMergingTeamTracker(null);
            } else {
              setModelGroupParty({
                teams: modelGroupPartyRef.current.teams.map((team, i) => {
                  if (i === mergingTeamTracker) {
                    return {
                      ...team,
                      mergedStatus: "merged",
                    };
                  } else if (i === next) {
                    return {
                      ...team,
                      mergedStatus: "merging",
                    };
                  } else return team;
                }),
              });
              setMergingTeamTracker(next);
            }
          })
          .catch((err) => {
            // dialog
            // stop merge sequence
            console.log(err);
            renderDialog(null, AlertMergeSequenceFail, {
              teamName: mergingTeam.name,
            });
            setMergingTeamTracker(null);
            setModelGroupParty({
              merging: false,
              teams: modelGroupPartyRef.current.teams.map((team) =>
                team.name === mergingTeam.name
                  ? {
                      ...team,
                      mergedStatus: "failed",
                    }
                  : team
              ),
            });
          });
      }, 1000);
    }
  }, [modelGroupParty.merging, mergingTeamTracker]);

  const generateGroupParty = (nPlayers) => {
    const groupParty = new Array(Math.ceil(nPlayers / MAX_TEAM_SIZE))
      .fill(null)
      .map(() => generateGroupPartyTeam());

    groupParty[groupParty.length - 1].roster.splice(
      0,
      MAX_TEAM_SIZE - (nPlayers % MAX_TEAM_SIZE || MAX_TEAM_SIZE)
    );

    setModelGroupParty({
      ...modelGroupPartyRef.current,
      teams: groupParty,
    });
  };

  const discardGroupParty = () => {
    setModelGroupParty({
      ...modelGroupPartyRef.current,
      teams: [generateGroupPartyTeam()],
    });
  };

  const createGroupParty = () => {
    // check if the previous group party has been merged.
    // if not the admin is asked to confirm the discarding of the
    // previous group party.

    const isCurrentMerged = modelGroupPartyRef.current.teams.every(
      ({ mergedStatus }) => mergedStatus === "merged"
    );

    if (!isCurrentMerged) {
      // dialog asking confirmation if the current group party should be discarded
      renderDialog(null, ConfirmDiscardGroupParty, (discard) => {
        if (!discard) return;
        renderDialog(null, InputDialogNewGroupParty, (nPlayers) => {
          if (!nPlayers) {
            return discardGroupParty();
          } else {
            generateGroupParty(nPlayers);
          }
        });
      });
    } else {
      renderDialog(null, InputDialogNewGroupParty, (nPlayers) => {
        if (!nPlayers) return;
        generateGroupParty(nPlayers);
      });
    }
  };

  return {
    mergingTeamTracker,
    ...modelGroupParty,
    setModelGroupParty,
    createGroupParty,
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

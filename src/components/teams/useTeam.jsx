import * as React from "react";
import { afmachine, logTeam, logRoster } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "/src/hooks/index.js";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";
import { useLocation } from "react-router-dom";

function AlertMerge({ message, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge team</AlertDialogHeading>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
}

function __createTeam(source) {
  return afmachine.createPersistentTeam(source);
}

function useTeam(
  source,
  { fill = false, depth = 0, createTeam = __createTeam } = {},
) {
  const {
    entity: team,
    state,
    id,
    create,
  } = useAfmachineEntity(source, createTeam, {
    fill,
    depth,
  });
  const location = useLocation();

  const roster = React.useMemo(() => {
    const __roster = team.roster.get();
    if (location.pathname !== "/merge") return __roster;
    for (let i = 0; i < MAX_TEAM_SIZE; i++) {
      if (!__roster[i]) {
        __roster[i] = afmachine.createPlayer({
          username: "player_#" + (i + 1),
        });
        __roster[i].seat = true;
      }
    }
    return __roster;
  }, [id, state, location]);

  const removeTeamPlayer = function (player) {
    team.removePlayer(player);
  };
  const addTeamPlayer = function (player) {
    team.addPlayer(player);
    console.log(team);
  };

  const changeTeamName = function (form, setForm) {
    team.name = form.fields.teamName || form.randomName;
  };

  const mergeTeam = function (e) {
    console.log(e);
    team
      .merge()
      .then(() => {
        create(null, { fill, depth });
      })
      .catch((err) => {
        renderDialog(null, AlertMerge, { message: err.message });
      });
  };

  const addPackage = function (pkg) {
    team
      .registerPackage(pkg)
      .then(() => {
        alert("done");
      })
      .catch((err) => {
        renderDialog(null, AlertMerge, { message: err.message });
      });
  };

  return {
    state,
    team,
    roster,
    removeTeamPlayer,
    addTeamPlayer,
    changeTeamName,
    mergeTeam,
    addPackage,
  };
}

export { useTeam };

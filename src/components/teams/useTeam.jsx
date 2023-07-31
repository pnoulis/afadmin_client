import * as React from "react";
import { afmachine, logTeam, logRoster } from "/src/services/afmachine.js";
import { useAfmachineEntity2 } from "/src/hooks/index.js";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import {
  AlertDialog,
  AlertDialogHeading,
  AlertDialogDescription,
  renderDialog,
} from "/src/components/dialogs/index.js";

function AlertMerge({ message, handleClose }) {
  return (
    <AlertDialog initialOpen onClose={handleClose}>
      <AlertDialogHeading>merge team</AlertDialogHeading>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
}

function __createTeam(team) {
  return afmachine.createTeam(team);
}

function useTeam(
  sourceTeam,
  { fill = false, depth = 0, createTeam = __createTeam } = {},
) {
  const {
    entity: team,
    state,
    id,
  } = useAfmachineEntity2(sourceTeam, createTeam, {
    fill,
    depth,
  });

  const [roster] = React.useMemo(
    function () {
      const __roster = team.roster.asArray(false);
      for (let i = 0; i < MAX_TEAM_SIZE; i++) {
        if (!__roster[i]) {
          __roster[i] = afmachine.createPlayer({
            username: "player_#" + (i + 1),
          });
          __roster[i].seat = true;
        }
        logRoster(__roster);
      }
      return [__roster];
    },
    [team, state, id],
  );

  const removeTeamPlayer = function (player) {
    team.removePlayer(player);
  };
  const addTeamPlayer = function (player) {
    team.addPlayer(player);
  };

  const changeTeamName = function (form, setForm) {
    team.name = form.fields.teamName || form.randomName;
  };

  const mergeTeam = function (e) {
    team
      .__merge()
      .then((res) => {
        console.log(res);
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
  };
}

export { useTeam };

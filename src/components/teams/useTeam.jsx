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
import {
  PopoverAsyncAction,
  PopoverAsyncState,
} from "/src/components/async/index.js";
import { useAfmachineAsyncAction } from "/src/hooks/index.js";

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
  team,
  { fill = false, depth = 0, createTeam = __createTeam } = {},
) {
  const teamRef = React.useRef(null);
  teamRef.current = React.useMemo(() => {
    const __team = createTeam(team);
    if (fill) {
      __team.fill(team, { depth });
    }
    return __team;
  }, [team]);

  const [state, id, entity] = useAfmachineEntity(teamRef.current);
  const [merging, run, data, mergingAction] = useAfmachineAsyncAction(
    teamRef.current.merging,
  );

  const [roster] = React.useMemo(
    function () {
      const __roster = teamRef.current.roster.asArray(false);
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
    [state, id],
  );

  const removeTeamPlayer = function (player) {
    teamRef.current.removePlayer(player);
  };
  const addTeamPlayer = function (player) {
    teamRef.current.addPlayer(player);
  };

  const changeTeamName = function (form, setForm) {
    teamRef.current.name = form.fields.teamName || form.randomName;
  };

  const mergeTeam = function (e) {
    mergingAction.run();
    // try {
    //   renderDialog(
    //     null,
    //     PopoverAsyncAction,
    //     {
    //       action: aa,
    //     },
    //     function (err, merged) {
    //       if (err) {
    //         // catch affers
    //       } else if (merged) {
    //       }
    //     },
    //   );
    // } catch (err) {
    //   renderDialog(null, AlertMerge, { message: err.message });
    // }
  };

  return {
    state,
    id,
    team: teamRef.current,
    roster,
    removeTeamPlayer,
    addTeamPlayer,
    changeTeamName,
    mergeTeam,
    mergingAction,
  };
}

export { useTeam };

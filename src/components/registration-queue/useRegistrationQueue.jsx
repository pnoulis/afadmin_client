// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { renderDialog } from "/src/components/dialogs/index.js";
import {
  AlertDuplicatePlayerRegistrationQueue,
  AlertPlayerNoWristbandPairing,
  ConfirmUnpairPlayerWristband,
} from "/src/components/dialogs/index.js";
import { PopoverAsyncAction } from "/src/components/async/index.js";

function useRegistrationQueue(players = [], { fill = false } = {}) {
  const [queue, setQueue] = React.useState([...players]);

  function addQueue(player) {
    const lnQueue = queue.length;
    for (let i = 0; i < lnQueue; i++) {
      if (queue[i].username === player.username) {
        return renderDialog(null, AlertDuplicatePlayerRegistrationQueue, {
          player: player.username,
        });
      }
    }
    const persistentPlayer = afmachine.createPersistentPlayer(player);
    if (
      persistentPlayer.compareStates(
        (states, current) => current >= states.inTeam,
      )
    ) {
      renderDialog(null, AlertPlayerNoWristbandPairing, { player });
    } else if (persistentPlayer.wristband.inState("registered")) {
      renderDialog(null, ConfirmUnpairPlayerWristband, { player }, (yes) => {
        if (!yes) return;
        renderDialog(null, PopoverAsyncAction, {
          run: true,
          action: function () {
            return persistentPlayer.unpairWristband();
          },
          onSettled: function (resolved) {
            if (resolved) {
              setQueue([...queue, persistentPlayer]);
            }
          },
        });
      });
    } else {
      setQueue([...queue, persistentPlayer]);
    }
  }

  function rmQueue(player) {
    const lnQueue = queue.length;
    const newQueue = [];
    for (let i = 0; i < lnQueue; i++) {
      if (queue[i].username === player.username) continue;
      newQueue.push(queue[i]);
    }
    setQueue(newQueue);
  }

  const viewingQueue = React.useMemo(() => {
    if (!fill) return queue;
    const vqueue = new Array(MAX_TEAM_SIZE);
    for (let i = 0; i < MAX_TEAM_SIZE; i++) {
      if (queue[i] == null) {
        vqueue[i] = afmachine.createPlayer({
          username: "player_#" + (i + 1),
        });
        vqueue[i].filler = true;
      } else {
        vqueue[i] = queue[i];
      }
    }
    return vqueue;
  }, [queue]);

  return {
    addQueue,
    rmQueue,
    queue: viewingQueue,
  };
}

export { useRegistrationQueue };

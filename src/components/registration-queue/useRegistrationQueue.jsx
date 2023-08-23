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

function useRegistrationQueue(players = [], { fill = false } = {}) {
  const [queue, setQueue] = React.useState([...players]);

  function addQueue(player) {
    const lnQueue = queue.length;
    const newQueue = [];
    for (let i = 0; i < lnQueue; i++) {
      if (queue[i].username === player.username) {
        renderDialog(null, AlertDuplicatePlayerRegistrationQueue, {
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
    } else if (persistentPlayer.wristband.inState("paired")) {
      renderDialog(null, ConfirmUnpairPlayerWristband, { player }, (yes) => {
        if (!yes) return;
      });
    } else {
      newQueue.push(persistentPlayer);
    }

    console.log(player);
    setQueue(newQueue.concat(queue));
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
  function flushQueue() {}

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
    flushQueue,
    queue: viewingQueue,
  };
}

export { useRegistrationQueue };

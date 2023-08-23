// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { smallid } from "js_utils/uuid";
import { isObject } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { Scheduler } from "/src/services/afmachine/afmachine.js";

function useAfmachineAction(
  source,
  { onSettled, timePending = 0, timeResolving = 500, timeRejecting = 500 },
) {
  const [state, setState] = React.useState("");
  const actionRef = React.useRef(null);
  const tRef = React.useRef(0);
  const listenerRef = React.useRef(null);

  if (actionRef.current == null) {
    if (!(source instanceof Scheduler)) {
      conosle.log(`action is not a Scheduler entity`);
      actionRef.current = new Scheduler();
      console.log("Created scheduled action");
    }

    listenerRef.current = actionRef.current.on(
      "stateChange",
      function (currentState) {
        const T = tRef.current - Date.now();
        switch (currentState) {
          case "pending":
            setState("pending");
            tRef.current = Date.now() + timePending;
            break;
          case "resolved":
            delay(T > 0 ? T : 0)
              .then(setState.bind(null, "resolved"))
              .then(delay.bind(null, timeResolving))
              .then(setState.bind(null, "idle"))
              .finally(onSettled.bind(null, true));
            break;
          case "rejected":
            delay(T > 0 ? T : 0)
              .then(setState.bind(null, "rejected"))
              .then(delay.bind(null, timeRejecting))
              .then(setState.bind(null, "idle"))
              .finally(onSettled.bind(null, false));
            break;
        }
      },
    );
    console.log("subscribed to stateChange event");
    setState(actionRef.current.getState().name);
  }

  React.useEffect(() => {
    return () => listenerRef.current();
  }, []);

  return {
    state,
    run() {
      return actionRef.current.run(source);
    },
  };
}

export { useAfmachineAction };
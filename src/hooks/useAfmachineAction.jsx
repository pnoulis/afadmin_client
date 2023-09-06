// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { delay } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { Scheduler } from "/src/services/afmachine/afmachine.js";
import { toggleClicks } from "/src/utils/index.js";

function useAfmachineAction(
  source,
  {
    run = false,
    onSettled = () => {},
    timePending = 0,
    timeResolving = 500,
    timeRejecting = 500,
  } = {},
) {
  const [state, setState] = React.useState("");
  const actionRef = React.useRef(null);
  const tRef = React.useRef(0);

  if (actionRef.current == null) {
    if (!(source instanceof Scheduler)) {
      actionRef.current = new Scheduler();
    }
    setState(actionRef.current.getState().name);
  }

  React.useEffect(() => {
    const removeListener = actionRef.current.on(
      "stateChange",
      function (currentState) {
        const T = tRef.current - Date.now();
        switch (currentState) {
          case "pending":
            toggleClicks();
            setState("pending");
            tRef.current = Date.now() + timePending;
            break;
          case "resolved":
            delay(T > 0 ? T : 0)
              .then(setState.bind(null, "resolved"))
              .then(delay.bind(null, timeResolving))
              .then(setState.bind(null, "idle"))
              .finally(() => {
                onSettled(true, actionRef.current.getResponse());
                toggleClicks();
              });
            break;
          case "rejected":
            delay(T > 0 ? T : 0)
              .then(setState.bind(null, "rejected"))
              .then(delay.bind(null, timeRejecting))
              .then(setState.bind(null, "idle"))
              .finally(() => {
                onSettled(false, actionRef.current.getResponse());
                toggleClicks();
              });
            break;
        }
      },
    );
    if (run) {
      actionRef.current.run(source);
    }
    return () => removeListener();
  }, []);

  return {
    state,
    run() {
      return actionRef.current.run(source);
    },
    action: actionRef.current,
  };
}

export { useAfmachineAction };

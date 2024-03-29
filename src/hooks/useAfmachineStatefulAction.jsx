// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { delay } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { toggleClicks } from "/src/utils/index.js";

function useAfmachineStatefulAction(
  aa,
  { onSettled, timePending = 0, timeResolving = 500, timeRejecting = 500 } = {},
) {
  const [state, setState] = React.useState(aa.getState().name);
  const tRef = React.useRef(0);

  React.useEffect(() => {
    let unsubStateChange = undefined;

    unsubStateChange = aa.on("stateChange", (aaState) => {
      const T = tRef.current - Date.now();
      switch (aaState) {
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
              onSettled(true, aa.getResponse());
              toggleClicks();
            });
          break;
        case "rejected":
          delay(T > 0 ? T : 0)
            .then(setState.bind(null, "rejected"))
            .then(delay.bind(null, timeRejecting))
            .then(setState.bind(null, "idle"))
            .finally(() => {
              onSettled(false, aa.getResponse());
              toggleClicks();
            });
          break;
      }
    });

    return () => {
      unsubStateChange();
    };
  }, [aa]);

  return state;
}

export { useAfmachineStatefulAction };

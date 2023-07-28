import * as React from "react";
import { AsyncAction } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "./useAfmachineEntity";
import { afmachine } from "/src/services/afmachine.js";

/*
  Example:
function Listing() {
  const [state, run] = useAsyncAction(() => afmachine.listPackages(), {
    timePending: 5000,
  });

  return state === "idle" ? (
    <button onClick={() => run()}>list packages</button>
  ) : (
    <p>loading....</p>
  );
}
 */
function useAfmachineAsyncAction(
  action, // must be memoized, or it must not be a function creation expression
  { timePending = 0, timeResolving = 1000, timeRejecting = 1000 } = {},
) {
  const aRef = React.useRef(null);
  aRef.current = React.useMemo(
    () =>
      action instanceof AsyncAction
        ? action
        : new AsyncAction(action.bind(afmachine)),
    [action],
  );
  const [state] = useAfmachineEntity(aRef.current);
  const [data, setData] = React.useState(null);

  return [
    state,
    function (...args) {
      return aRef.current
        .run(...args, { timePending, timeResolving, timeRejecting })
        .then(setData)
        .catch(setData);
    },
    function (dataCb) {
      if (!data) return null;
      else if (data instanceof Error) dataCb(data);
      else if (data) dataCb(null, data);
      setData(null);
    },
    aRef.current,
  ];
}

export { useAfmachineAsyncAction };

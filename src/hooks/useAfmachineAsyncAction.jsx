import * as React from "react";
import { AsyncAction } from "/src/services/afmachine.js";
import { useAfmachineEntity } from "./useAfmachineEntity";

function __createAsyncAction(source) {
  return new AsyncAction(source);
}
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
  const {
    entity: aa,
    state,
    id,
  } = useAfmachineEntity(action, __createAsyncAction);
  const [data, setData] = React.useState(null);

  function run(...args) {
    return aa
      .run(...args, { timePending, timeResolving, timeRejecting })
      .then(setData)
      .catch(setData);
  }
  function onData(callback) {
    if (!data) return null;
    else if (data instanceof Error) callback(data);
    else if (data) callback(null, data);
    setData(null);
  }

  return [state, run, onData, aa];
}

export { useAfmachineAsyncAction };

import * as React from "react";
import { AsyncAction } from "afmachine/src/index.js";
import { useAfmachineEntity } from "./useAfmachineEntity";

/*
  Example:
function Listing() {
  const [state, run] = useAsyncAction(() => Afmachine.listPackages(), {
    timePending: 5000,
  });

  return state === "idle" ? (
    <button onClick={() => run()}>list packages</button>
  ) : (
    <p>loading....</p>
  );
}
 */
function useAfmachineAsyncAction(action, options) {
  const aRef = React.useRef();
  if (aRef.current == null) {
    aRef.current = new AsyncAction(action, options);
  }
  const [state] = useAfmachineEntity(aRef.current);

  return [state, aRef.current.run.bind(aRef.current)];
}

export { useAfmachineAsyncAction };

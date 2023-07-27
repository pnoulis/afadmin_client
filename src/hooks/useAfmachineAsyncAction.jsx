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
function useAfmachineAsyncAction(action, options) {
  const aRef = React.useRef();
  if (aRef.current == null) {
    aRef.current =
      action instanceof AsyncAction
        ? action
        : new AsyncAction(action.bind(afmachine), options);
  }
  const [state] = useAfmachineEntity(aRef.current);
  const [data, setData] = React.useState(null);

  return [
    state,
    () =>
      aRef.current
        .run(options)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          setData(err);
        }),
    data,
    setData,
  ];
}

export { useAfmachineAsyncAction };

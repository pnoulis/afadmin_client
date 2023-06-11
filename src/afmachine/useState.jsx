import * as React from "react";

function useStateful(stateful) {
  const [state, setState] = React.useState(stateful.getState());
  const listener = React.useCallback(
    (newState) => setState(newState),
    [stateful]
  );

  React.useEffect(() => {
    stateful.on("stateChange", listener);
    return () => stateful.flush("stateChange", listener);
  }, [stateful]);

  return stateful;
}

export { useStateful };

import * as React from "react";

function useAfmachineEntity(entity) {
  const [state, setState] = React.useState(entity.getState());

  React.useEffect(() => {
    const listener = entity.on("stateChange", (currentState) => {
      setState(currentState);
    });

    return () => listener();
  }, [entity]);

  return [state, entity];
}

export { useAfmachineEntity };

import { smallid } from "js_utils/uuid";
import * as React from "react";

function useAfmachineEntity(entity) {
  const [state, setState] = React.useState(entity.getState()?.name || "");
  const [id, setId] = React.useState(smallid());

  React.useEffect(() => {
    const unsubStateChange = entity.on("stateChange", function (state) {
      setState(state);
    });

    const unsubChange = entity.on("change", function () {
      setId(smallid());
    });

    return function () {
      unsubStateChange();
      unsubChange();
    };
  }, [entity]);

  return [state, id];
}

export { useAfmachineEntity };

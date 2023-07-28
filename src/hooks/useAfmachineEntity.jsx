import { smallid } from "js_utils/uuid";
import * as React from "react";

function useAfmachineEntity(entity) {
  const [state, setState] = React.useState(entity?.getState?.()?.name || "");
  const [id, setId] = React.useState();

  React.useEffect(() => {
    let unsubChange;
    let unsubStateChange;

    if (entity.hasEvent("stateChange")) {
      unsubStateChange = entity.on("stateChange", (state) => {
        setState(state);
      });
    }

    if (entity.hasEvent("change")) {
      unsubChange = entity.on("change", () => {
        setId(smallid());
      });
    }

    setId(smallid());
    return function () {
      unsubStateChange && unsubStateChange();
      unsubChange && unsubChange();
    };
  }, [entity]);

  return [state, id, entity];
}

export { useAfmachineEntity };

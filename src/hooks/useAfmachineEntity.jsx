// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { smallid } from "js_utils/uuid";
import { isObject, isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //

function useAfmachineEntity(
  source,
  createEntity,
  { fill = false, depth = 0, targetState = "" } = {},
) {
  const [state, setState] = React.useState("");
  const [id, setId] = React.useState("");
  const constructorRef = React.useRef(
    createEntity?.().constructor || createEntity.constructor,
  );
  const sourceRef = React.useRef(null);
  const entityRef = React.useRef(null);
  if (constructorRef.current == null) {
    throw new Error("useAfmachineEntity missing constructor");
  }

  if (source !== sourceRef.current) {
    sourceRef.current = source;
    if (source instanceof constructorRef.current) {
      entityRef.current = source;
    } else {
      entityRef.current = fill
        ? createEntity().fill(source, {
            depth,
            state: targetState,
          })
        : createEntity(constructorRef.current.normalize([source]));
    }
  }

  React.useEffect(() => {
    if (entityRef.current.hasEvent?.("stateChange")) {
      var unsubStateChange = entityRef.current.on("stateChange", (cstate) => {
        console.log("state changed");
        setState(cstate);
      });
    }
    if (entityRef.current.hasEvent?.("change")) {
      var unsubChange = entityRef.current.on("change", (action) => {
        if (constructorRef.current.name === "GroupParty") {
          console.log("group party changed");
        }
        if (action === "removeTeam") {
          console.log(entityRef.current);
          console.log("REMOVE TEAM");
        }
        setId(smallid());
      });
    }
    setId(smallid());
    setState(
      isObject(entityRef.current.state)
        ? entityRef.current.getState().name
        : entityRef.current.state,
    );
    return () => {
      isFunction(unsubStateChange) && unsubStateChange();
      isFunction(unsubChange) && unsubChange();
    };
  }, [entityRef.current]);

  return {
    state,
    id,
    entity: entityRef.current,
  };
}

export { useAfmachineEntity };

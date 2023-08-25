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
  const entityRef = React.useRef(null);
  if (entityRef.current === null) {
    entityRef.current = new constructorRef.current(source);
  }

  if (constructorRef.current == null) {
    throw new Error("useAfmachineEntity missing constructor");
  }

  React.useEffect(() => {
    console.log(source);
    console.log(isObject(source.state) ? source.getState().name : source.state);
    console.log(`SOURCE CHANGED ${constructorRef.current.name}`);
    entityRef.current = fill
      ? createEntity(constructorRef.current.normalize(source)).fill(null, {
          depth,
          state: targetState,
        })
      : createEntity(constructorRef.current.normalize(source));

    setState(
      isObject(entityRef.current.state)
        ? entityRef.current.getState().name
        : entityRef.current.state,
    );

    if (!("on" in entityRef.current)) return;

    const unsubStateChange = entityRef.current.on("stateChange", (cstate) => {
      setState(cstate);
    });
    const unsubChange = entityRef.current.on("change", () => setId(smallid()));

    return () => {
      unsubStateChange();
      unsubChange();
    };
  }, [source]);

  return {
    state,
    id,
    entity: entityRef.current,
  };
}

export { useAfmachineEntity };

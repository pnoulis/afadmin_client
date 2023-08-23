// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { smallid } from "js_utils/uuid";
import { isObject } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //

function useAfmachineEntity(
  source,
  createEntity,
  { fill = false, depth = 0, targetState = "" } = {},
) {
  const [state, setState] = React.useState("");
  const [id, setId] = React.useState("");
  const constructorRef = React.useRef(createEntity?.().constructor);
  const subsRef = React.useRef(null);
  const entityRef = React.useRef(source);

  if (constructorRef.current == null) {
    throw new Error("useAfmachineEntity missing constructor");
  } else if (!(entityRef.current instanceof constructorRef.current)) {
    console.log(`entity is not a ${constructorRef.current.name} entity`);
    entityRef.current = fill
      ? createEntity(source).fill(null, {
          depth,
          state: targetState,
        })
      : createEntity(source);
    console.log(`created ${constructorRef.current.name} entity`);
  }

  if (subsRef.current === null) {
    if ("on" in entityRef.current) {
      console.log(`${constructorRef.current.name} entity is eventful`);
      entityRef.current.on("stateChange", function (state) {
        setState(state);
      });
      console.log("subscribed to stateChange event");
      entityRef.current.on("change", function () {
        setId(smallid());
      });
      console.log("subscribed to change event");
    } else {
      console.log(`${constructorRef.current.name} entity is not eventful`);
    }

    setState(
      isObject(entityRef.current.state)
        ? entityRef.current.getState().name
        : entityRef.current.state,
    );
    subsRef.current = true;
  }

  return {
    state,
    id,
    entity: entityRef.current,
  };
}

export { useAfmachineEntity };

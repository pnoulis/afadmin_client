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
  const entityRef = React.useRef(createEntity(source));

  if (constructorRef.current == null) {
    throw new Error("useAfmachineEntity missing constructor");
  }

  React.useEffect(() => {
    console.log(entityRef);
    console.log(source);
    console.log("SOURCE CHANGE");
    // if (fill) {
    //   entityRef.current.fill(null, { depth, state: targetState });
    // }
    // if ("on" in entityRef.current) {
    //   var stateChangeListener = entityRef.current.on(
    //     "stateChange",
    //     function (currentState) {
    //       setState(currentState);
    //     },
    //   );
    //   var changeListener = entityRef.current.on("change", function () {
    //     setId(smallid());
    //   });
    // }
    setState(
      isObject(entityRef.current.state)
        ? entityRef.current.getState().name
        : entityRef.current.state,
    );
    // setId(smallid());

    // return () => {
    //   stateChangeListener && stateChangeListener();
    //   changeListener && changeListener();
    // };
  }, [source]);

  return {
    state,
    id,
    entity: entityRef.current,
  };
}

export { useAfmachineEntity };

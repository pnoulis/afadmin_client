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
  const entityRef = React.useRef({});
  if (constructorRef.current == null) {
    throw new Error("useAfmachineEntity missing constructor");
  }

  entityRef.current = React.useMemo(() => {
    source ??= {};
    console.log(source);
    console.log(isObject(source.state) ? source.getState().name : source.state);
    if (source === entityRef.current) return source;
    console.log(`SOURCE CHANGED ${constructorRef.current.name}`);
    const entity = fill
      ? createEntity(constructorRef.current.normalize([source])).fill(null, {
          depth,
          state: targetState,
        })
      : createEntity(constructorRef.current.normalize([source]));

    return entity;
  }, [source]);

  React.useEffect(() => {
    setState(
      isObject(entityRef.current.state)
        ? entityRef.current.getState().name
        : entityRef.current.state,
    );

    if (entityRef.current && "on" in entityRef.current) {
      entityRef.current.on("stateChange", (cstate) => {
        console.log("state changed");
        setState(cstate);
      });
      entityRef.current.on("change", () => {
        console.log("ENTITY CHANGED");
        setId(smallid());
      });
    }
  }, [entityRef.current]);

  // React.useEffect(() => {
  //   source ??= {};
  //   console.log(source);
  //   console.log(isObject(source.state) ? source.getState().name : source.state);
  //   console.log(`SOURCE CHANGED ${constructorRef.current.name}`);
  //   entityRef.currentRef.current = fill
  //     ? createEntity(constructorRef.current.normalize([source])).fill(null, {
  //         depth,
  //         state: targetState,
  //       })
  //     : createEntity(constructorRef.current.normalize([source]));

  //   setState(
  //     isObject(entityRef.current.state)
  //       ? entityRef.current.getState().name
  //       : entityRef.current.state,
  //   );

  //   if (entityRef.current && "on" in entityRef.current) {
  //     const unsubStateChange = entityRef.current.on("stateChange", (cstate) => {
  //       console.log("state changed");
  //       setState(cstate);
  //     });
  //     const unsubChange = entityRef.current.on("change", () => {
  //       console.log("ENTITY CHANGED");
  //       setId(smallid());
  //     });
  //     return () => {
  //       unsubStateChange();
  //       unsubChange();
  //     };
  //   }
  // }, [source]);

  return {
    state,
    id,
    entity: entityRef.current,
  };
}

export { useAfmachineEntity };

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
  const [getSource, setSource] = React.useState(() => () => source);
  const [state, setState] = React.useState("");
  const [id, setId] = React.useState("");
  const constructorRef = React.useRef(
    createEntity?.().constructor || createEntity.constructor,
  );
  const entityRef = React.useRef(null);
  if (constructorRef.current == null) {
    throw new Error("useAfmachineEntity missing constructor");
  }
  React.useEffect(() => {
    if (source === entityRef.current || source === getSource()) {
      console.log("THEY ARE THE SAME");
    } else {
      console.log("THEY ARE NOT THE SAME");
      setSource(() => () => source);
    }
    console.log("USE AFMACHINE ENTITY SOURCE CHANGED");
  }, [source]);

  function changeSource(newSource) {
    setSource(() => () => newSource);
  }

  entityRef.current = React.useMemo(() => {
    if (getSource() instanceof constructorRef.current) return getSource();
    const entity = fill
      ? createEntity(constructorRef.current.normalize([getSource()])).fill(
          null,
          {
            depth,
            state: targetState,
          },
        )
      : createEntity(constructorRef.current.normalize([getSource()]));
    console.log(fill);
    console.log(entity);
    console.log("created entity");

    return entity;
  }, [getSource, setSource]);

  React.useEffect(() => {
    console.log(entityRef.current);
    console.log("ENTITY CHANGED");
    setState(
      isObject(entityRef.current.state)
        ? entityRef.current.getState().name
        : entityRef.current.state,
    );

    if (entityRef.current.hasEvent?.("stateChange")) {
      var unsubStateChange = entityRef.current.on("stateChange", (cstate) => {
        console.log("state changed");
        setState(cstate);
      });
    }
    if (entityRef.current.hasEvent?.("change")) {
      var unsubChange = entityRef.current.on("change", () => {
        console.log(entityRef.current);
        console.log("ENTITY CHANGED");
        setId(smallid());
      });
    }
    setId(smallid());

    return () => {
      unsubStateChange && unsubStateChange();
      unsubChange && unsubChange();
    };
  }, [entityRef.current]);

  return {
    state,
    id,
    entity: entityRef.current,
    changeSource,
  };
}

export { useAfmachineEntity };

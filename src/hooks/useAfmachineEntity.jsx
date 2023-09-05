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

  function changeSource(newSource) {
    setSource(() => () => newSource);
  }

  React.useEffect(() => {
    if (source !== entityRef.current || source !== getSource()) {
      setSource(() => () => source);
    }
  }, [source]);

  entityRef.current = React.useMemo(() => {
    console.log(`SOURCE CHANGED ${constructorRef.current.name}`);
    if (getSource() instanceof constructorRef.current) {
      return getSource();
    } else if (fill) {
      return createEntity().fill(getSource(), {
        depth,
        state: targetState,
      });
    } else {
      return createEntity(constructorRef.current.normalize([getSource()]));
    }
  }, [getSource, setSource]);

  React.useEffect(() => {
    if (entityRef.current.hasEvent?.("stateChange")) {
      var unsubStateChange = entityRef.current.on("stateChange", (cstate) => {
        setState(cstate);
      });
    }
    if (entityRef.current.hasEvent?.("change")) {
      var unsubChange = entityRef.current.on("change", () => {
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
  }, [getSource, setSource]);

  return {
    state,
    id,
    entity: entityRef.current,
    changeSource,
  };
}

export { useAfmachineEntity };

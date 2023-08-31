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
    console.log(source);
    console.log("new source");
    console.log(getSource());
    console.log("old source");
    if (source === entityRef.current || source === getSource()) {
      console.log(`SOURCE ${constructorRef.current.name} SAME`);
    } else {
      console.log(`SOURCE ${constructorRef.current.name} NOT SAME`);
      setSource(() => () => source);
    }
  }, [source]);

  function changeSource(newSource) {
    setSource(() => () => newSource);
  }

  entityRef.current = React.useMemo(() => {
    console.log(getSource());
    console.log(`GET SOURCE ${constructorRef.current.name} CHANGED`);
    if (getSource() instanceof constructorRef.current) {
      console.log(`GET SOURCE IS AN INSTANCEOF ${constructorRef.current.name}`);
      console.log(getSource());
      return getSource();
    } else {
      console.log(`GET SOURCE IS NOT AN INSTANCEOF ${constructorRef.current.name}`);
    }
    const entity = fill
      ? createEntity().fill(getSource(), {
          depth,
          state: targetState,
        })
      : createEntity(constructorRef.current.normalize([getSource()]));
    console.log(fill);
    console.log(entity);
    console.log("created entity");

    return entity;
  }, [getSource, setSource]);

  React.useEffect(() => {
    console.log(entityRef.current);
    console.log(getSource());
    console.log(`ENTITYREF ${constructorRef.current.name} changed`);
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
    console.log("SET ID");
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

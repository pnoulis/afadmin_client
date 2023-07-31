import { smallid } from "js_utils/uuid";
import * as React from "react";

function useAfmachineEntity2(
  entity,
  createEntity = (source) => source,
  { fill = false, state: targetState = "", depth = 0 } = {},
) {
  const entityRef = React.useRef(null);
  entityRef.current = React.useMemo(() => {
    const team = entity ? entity : createEntity(entity);
    if (fill) {
      team.fill(entity, { state: targetState, depth });
    }
    return team;
  }, [entity]);
  const [state, setState] = React.useState("");
  const [id, setId] = React.useState("");

  function newEntity(source) {
    entityRef.current = source ? source : createEntity(source);
    if (fill) {
      entityRef.current.fill(source, { state: targetState, depth });
    }
    setId(smallid());
  }

  React.useEffect(() => {
    entityRef.current.on("stateChange", (state) => {
      setState(state);
    });
    entityRef.current.on("change", () => {
      setId(smallid());
    });
    setState(entityRef.current.getState().name);
  }, [entityRef.current]);

  return {
    entity: entityRef.current,
    state,
    id,
    newEntity,
  };
}

function useAfmachineEntity(entity, createEntity = (source) => source) {
  const entityRef = React.useRef(null);
  entityRef.current = React.useMemo(() => {
    return entity ? entity : createEntity(entity);
  }, [entity, createEntity]);

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

export { useAfmachineEntity, useAfmachineEntity2 };

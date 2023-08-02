import * as React from "react";
import { smallid } from "js_utils/uuid";

/**
 * @example
 * Where options:
 *```
 * options.fill: boolean
 * options.depth: Number
 * options.state: String
 *`
 */
function useAfmachineEntity(
  entity,
  createEntity = (source) => source,
  { fill = false, depth = 0, state: targetState = "" } = {},
) {
  const entityRef = React.useRef(null);
  const [state, setState] = React.useState("");
  const [id, setId] = React.useState("");
  const [force, setForce] = React.useState(false);

  const newEntity = (function () {
    let __source = entity;
    let __options = {
      fill,
      depth,
      state: targetState,
    };
    let __constructor = createEntity().constructor;

    return (fromMemo, source, options) => {
      if (!fromMemo) {
        __source = source;
        __options = options ?? {
          fill,
          depth,
          state: targetState,
        };
        setForce((prev) => !prev);
      }
      const t = createEntity(__source);
      const __entity =
        __source instanceof __constructor ? __source : createEntity(__source);
      if (__options.fill) {
        __entity.fill(null, options);
      }
      __entity.on("stateChange", (state) => {
        setState(state);
      });

      if (__entity.hasEvent("change")) {
        __entity.on("change", () => {
          setId(smallid());
        });
      }
      setState(__entity.getState().name);
      setId(smallid());
      return __entity;
    };
  })();

  entityRef.current = React.useMemo(newEntity.bind(null, true), [
    entity,
    force,
  ]);

  return {
    entity: entityRef.current,
    state,
    id,
    create: newEntity.bind(null, false),
  };
}

export { useAfmachineEntity };

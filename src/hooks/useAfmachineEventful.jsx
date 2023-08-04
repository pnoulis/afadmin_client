import * as React from "react";
import { smallid } from "js_utils/uuid";

function useAfmachineEventful(
  entity,
  createEntity = (source) => source,
  { fill = false, depth = 0, state: targetState = "", ...config } = {},
) {
  const entityRef = React.useRef(null);
  const [id, setId] = React.useState("");
  const [force, setForce] = React.useState(false);

  const newEntity = (function () {
    let __source = entity;
    let __options = {
      fill,
      depth,
      state: targetState,
      ...config,
    };
    let __constructor = createEntity().constructor;

    return (fromMemo, source, options) => {
      if (!fromMemo) {
        __source = source;
        if (options) {
          __options = options;
        }
        setForce((prev) => !prev);
      }
      const __entity =
        __source instanceof __constructor ? __source : createEntity(__source);
      if (__options.fill) {
        __entity.fill(null, __options);
      }
      __entity.on("change", () => {
        setId(smallid());
      });
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
    id,
    create: newEntity.bind(null, false),
  };
}

export { useAfmachineEventful };

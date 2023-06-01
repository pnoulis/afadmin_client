import * as React from "react";
import { useContextApp } from "/src/app/index.js";

function useSubscriptions(...subIds) {
  const { on, flush } = useContextApp();
  const [subs, setSubs] = React.useState(subIds);
  const subsRef = React.useRef(null);

  React.useEffect(() => {
    subsRef.current = new Map();
    subIds.forEach((subId, i) => {
      const listener = (payload) =>
        setSubs([...subs.slice(0, i), payload, ...subs.slice(i + 1)]);
      subsRef.current.set(subId, listener);
      on(subId, listener);
    });
    return () =>
      subsRef.current.forEach((listener, subId) => flush(subId, listener));
  }, []);

  return subs;
}

export { useSubscriptions };

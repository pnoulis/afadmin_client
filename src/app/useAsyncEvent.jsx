import * as React from "react";

function useAsyncEvent(asyncEvent) {
  const [state, setState] = React.useState(asyncEvent.getState());
  const listener = React.useCallback((state) => setState(state), [asyncEvent]);

  React.useEffect(() => {
    asyncEvent.onStateChange(listener);
    return () => asyncEvent.flush(listener);
  }, [asyncEvent]);

  return state;
}

export { useAsyncEvent };

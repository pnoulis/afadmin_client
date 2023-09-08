// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isArray } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { ContextProvideHistoryToolbar } from "./ContextHistoryToolbar.jsx";

function HistoryToolbar({ history: initialValue = [], onChange, children }) {
  const [history, setHistory] = React.useState(initialValue);

  function forward(next) {
    setHistory([...history, next]);
  }

  function back(cb) {
    setHistory(history.slice(0, -1));
    cb?.();
  }

  React.useEffect(() => {
    if (!isArray(history)) {
      throw new Error(
        "HistoryToolbar invalid history object, must be an array",
      );
    }
    onChange?.({ forward, back, history, current: history.at(-1) });
  }, [history, setHistory, onChange]);

  return (
    <ContextProvideHistoryToolbar
      ctx={{ forward, back, history, current: history.at(-1) }}
    >
      {children}
    </ContextProvideHistoryToolbar>
  );
}

export { HistoryToolbar };

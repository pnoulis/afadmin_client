// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useContextHistoryToolbar } from "./ContextHistoryToolbar.jsx";

function HistoryToolbarCtx({ children }) {
  const ctx = useContextHistoryToolbar();
  return children(ctx);
}

export { HistoryToolbarCtx };

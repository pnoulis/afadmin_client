// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { WidgetPlus } from "/src/components/widgets/index.js";
import { useContextHistoryToolbar } from "./ContextHistoryToolbar.jsx";

function HistoryToolbarPusher({ next, children, className, style }) {
  const { forward } = useContextHistoryToolbar();
  return isFunction(children) ? (
    children(forward, next)
  ) : (
    <WidgetPlus
      className={className}
      style={style}
      onClick={() => forward(next)}
    />
  );
}

export { HistoryToolbarPusher };

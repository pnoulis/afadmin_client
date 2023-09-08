// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils/misc";
// ------------------------------ project  ------------------------------- //
import { WidgetArrow } from "/src/components/widgets/index.js";
import { useContextHistoryToolbar } from "./ContextHistoryToolbar.jsx";

function HistoryToolbarPopper({ onBack, className, style, children }) {
  const { back } = useContextHistoryToolbar();
  return isFunction(children) ? (
    children(back.bind(null, onBack))
  ) : (
    <WidgetArrow
      className={className}
      style={style}
      onClick={back.bind(null, onBack)}
    />
  );
}

export { HistoryToolbarPopper };

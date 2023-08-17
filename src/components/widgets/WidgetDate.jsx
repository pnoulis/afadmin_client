// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useTime } from "/src/hooks/index.js";

/**
 * WidgetDate
 * @example
 *
 */
function WidgetDate({ separator, className }) {
  const { weekday, day, month, literal } = useTime();
  return (
    <p className={className}>
      <span className="weekday">{weekday}</span>
      <span className="separator">{separator || literal}</span>
      <span className="day">{day}</span>
      <span className="separator">{separator || literal}</span>
      <span className="month">{month}</span>
    </p>
  );
}

export { WidgetDate };

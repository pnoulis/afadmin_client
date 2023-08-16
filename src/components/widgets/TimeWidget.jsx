// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useTime } from "/src/hooks/index.js";

/**
 * TimeWidget
 * @example
 *
 */
function TimeWidget({ separator, className }) {
  const { hour, minute, second, literal } = useTime({ eachSec: true });
  return (
    <p className={className}>
      <span className="hour">{hour}</span>
      <span className="separator">{separator || literal}</span>
      <span className="minute">{minute}</span>
      <span className="separator">{separator || literal}</span>
      <span className="second">{second}</span>
    </p>
  );
}

export { TimeWidget };

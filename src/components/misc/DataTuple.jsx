import * as React from "react";
import { isFunction, isObject, isNumber } from "js_utils/misc";

function DataTuple({
  src /* Data source */,
  nok /* No key */,
  nov /* No value */,
  name /* src[key] */,
  label /* Render label not name */,
  value /* Value over gval() */,
  gval = function (src, name) {
    return isObject(src) ? src[name] : src;
  } /* Get value */,
  dval = "-" /* Default value */,
  children,
}) {
  value ??= gval(src, name);
  return isFunction(children) ? (
    children(label || name, isNumber(value) ? value ?? dval : value || dval)
  ) : (
    <>
      {!nok && <span className="key">{label || name}</span>}
      {!nov && (
        <span className="value">
          {isNumber(value) ? value ?? dval : value || dval}
        </span>
      )}
    </>
  );
}

export { DataTuple };

import * as React from "react";
import { isFunction, isObject, isNumber } from "js_utils/misc";

function __parseValue(src, value, name) {
  return value ?? (isObject(src) ? src[name] : src);
}

function DataTuple({
  src /* Data source */,
  nok /* Do not render key */,
  nov /* Do not render value */,
  name /* src[name] */,
  label /* Render label instead of name */,
  value /* Value instead of src[name] */,
  pval = __parseValue /* Parse(value || src[name]) */,
  nop /* Do not parse(value || src[name])*/,
  dval = "-" /* Default value */,
  renderKey,
  renderValue,
  children,
}) {
  if (nop) {
    value ??= src[name];
  } else {
    value = pval(src, value, name);
  }
  return children ? (
    isObject(value) ? (
      children({
        key: label || name,
        ...value,
        dval,
      })
    ) : (
      children({
        key: label || name,
        value,
        dval,
      })
    )
  ) : (
    <>
      {!nok &&
        (renderKey ? (
          renderKey({ className: "key", key: label || name })
        ) : (
          <span className="key">{label || name}</span>
        ))}
      {!nov &&
        (renderValue ? (
          isObject(value) ? (
            renderValue({
              className: "value",
              ...value,
              dval,
            })
          ) : (
            renderValue({
              className: "value",
              value,
              dval,
            })
          )
        ) : (
          <span className="value">
            {isNumber(value) ? value ?? dval : value || dval}
          </span>
        ))}
    </>
  );
}

export { DataTuple };

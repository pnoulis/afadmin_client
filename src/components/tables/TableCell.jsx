import * as React from "react";

function TableCell({
  th = false,
  rowspan,
  colspan,
  headers,
  children,
  className,
  style,
}) {
  return th ? (
    <th style={style} className={className}>
      {children}
    </th>
  ) : (
    <td style={style} className={className}>
      {children}
    </td>
  );
}

export { TableCell };

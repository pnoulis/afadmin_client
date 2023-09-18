import * as React from "react";

function TableRow({ className, style, children }) {
  return (
    <tr className={className} style={style}>
      {children}
    </tr>
  );
}

export { TableRow };

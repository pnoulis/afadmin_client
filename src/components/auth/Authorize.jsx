// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useUser } from "/src/hooks/index.js";

function Authorize({ level = "cashier", children }) {
  const user = useUser();
  return children(level === user.permissions);
}

export { Authorize };

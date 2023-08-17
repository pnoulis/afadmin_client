// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { session } from "/src/services/session.js";
// ------------------------------ project  ------------------------------- //

function useUser() {
  const user = session.get("user") || {};
  return {
    loggedIn: session.loggedIn,
    ...user,
  };
}

export { useUser };

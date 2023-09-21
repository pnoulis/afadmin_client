// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { session } from "/src/services/session.js";
// ------------------------------ project  ------------------------------- //

function useUser() {
  const loggedIn = session.global.get('loggedIn');
  const user = session.global.get('user') || {};
  return {
    loggedIn,
    ...user,
  };
}

export { useUser };

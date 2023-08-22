// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useNavigate } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { afmachine } from "/src/services/afmachine/afmachine.js";
import { getCatchAffersMiddleware } from "/src/services/afmachine/getCatchAffersMiddleware.js";
import { displayFlashMessageMiddleware } from "/src/services/afmachine/displayFlashMessageMiddleware.js";
import { session } from "/src/services/session.js";
import { sRegisterPlayer } from "/src/services/afmachine/statefulActions.js";

const setMiddleware = (function () {
  let set = false;
  return (navigate) => {
    if (set) return;
    set = true;
    afmachine.services.storage = session;
    afmachine.pipeline.setAfterAll(getCatchAffersMiddleware(navigate));
    afmachine.pipeline.setAfterAll(displayFlashMessageMiddleware);
  };
})();

function useApp() {
  const navigate = useNavigate();

  React.useLayoutEffect(() => {
    setMiddleware(navigate);
  }, []);

  return {
    afmachine,
    session,
    sRegisterPlayer,
  };
}

export { useApp };

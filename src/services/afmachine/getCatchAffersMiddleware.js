// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import * as aferrs from "agent_factory.shared/errors.js";

function getCatchAffersMiddleware(navigate) {
  return async function (context, next, err) {
    const from = location.pathname;
    if (err) {
      if (!(err instanceof aferrs.AgentFactoryError)) {
        // Unknown error
        navigate("/500", { replace: true, state: { from, err } });
      } else if (err instanceof aferrs.ERR_TIMEOUT) {
        // Timeout
        navigate("/408", { replace: true, state: { from, err } });
      }
      throw err;
    }
    await next();
  };
}

export { getCatchAffersMiddleware };

import * as aferrs from "agent_factory.shared/errors.js";

function catchAferrs(navigate, handleErrCb) {
  return function (err) {
    if (!(err instanceof aferrs.AgentFactoryError)) {
      // Unknown error
      navigate("/500", { replace: true, state: { err } });
    } else if (err instanceof aferrs.ERR_TIMEOUT) {
      // Timeout
      navigate("/408", { replace: true, state: { err } });
    } else if (typeof handleErrCb === "function") {
      handleErrCb(err);
    } else if (handleErrCb) {
      throw err;
    } else {
      console.log(err);
    }
  };
}

export { catchAferrs };
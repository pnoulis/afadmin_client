import { Afmachine } from "afmachine";
import { TaskRunner } from "js_utils";
import * as Errors from "/src/errors.js";

function parseResponse(req, res) {
  if (res.result === "NOK") {
    if (res.validationErrors) {
      throw new Errors.ValidationError({ message: res.message, req, ...res });
    } else {
      throw new Errors.ModelError({ message: res.message, req, ...res });
    }
  }
  return res;
}

function parseError(req, err) {
  if (/timeout/.test(err.message)) {
    throw new Errors.TimeoutError({ req, err });
  }
  throw err;
}

if (!Afmachine.backend.initialized) {
  Afmachine.init();

  const tr = new TaskRunner({
    timeout: 10000,
    isConnected: () =>
      Afmachine.backend.connected && Afmachine.backend.isBooted,
  });

  Afmachine.request = (req) =>
    tr
      .run(() => req())
      .then((res) => parseResponse(req, res))
      .catch((err) => parseError(req, err));
}

export { Afmachine };

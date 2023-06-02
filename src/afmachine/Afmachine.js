import { CONFIG } from "afmachine/config";
import { TaskRunner } from "js_utils";
import * as Errors from "/src/errors.js";

const Afmachine = CONFIG.Afmachine;

function parseResponse(req, res) {
  console.log(req);
  console.log(res);
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
  console.log(req);
  console.log(err);
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

  Afmachine.subscribe = (route, options, cb) =>
    Afmachine.backend.backend.subscribe(route, options, cb);

  Afmachine.publish = (route, payload, options) =>
    Afmachine.backend.backend.publish(route, payload, options);
}

export { Afmachine };

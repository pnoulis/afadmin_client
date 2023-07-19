import { fmAgent } from "/src/components/flash_messages/index.js";
import * as aferrs from "agent_factory.shared/errors.js";

async function displayFlashMessageMiddleware(context, next, err) {
  if (err instanceof aferrs.ERR_BACKEND_MODEL) {
    fmAgent.warn({ message: err.message });
  } else if (context.res.message) {
    fmAgent.success({ message: context.res.message });
  }
  if (err) {
    throw err;
  }
  await next();
}

export { displayFlashMessageMiddleware };

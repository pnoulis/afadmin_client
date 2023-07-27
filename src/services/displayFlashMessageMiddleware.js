import { fmAgent } from "/src/components/flash_messages/index.js";
import * as aferrs from "agent_factory.shared/errors.js";

async function displayFlashMessageMiddleware(context, next, err) {
  if (err) {
    console.log(err);
    if (context.res.msg) {
      fmAgent.warn({ message: context.res.msg });
    }
    throw err;
  }
  if (context.res.msg) {
    fmAgent.success({ message: context.res.msg }, { timeout: 3000 });
  }
  await next();
}

export { displayFlashMessageMiddleware };

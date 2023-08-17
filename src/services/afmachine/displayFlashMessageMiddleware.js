// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { fmAgent } from '/src/components/flash_messages/index.js';

async function displayFlashMessageMiddleware(context, next, err) {
  if (err) {
    if (context.res?.msg) {
      fmAgent.warn({ message: context.res.msg });
    }
    if (context.res?.reason) {
      fmAgent.warn({ message: context.res.reason });
    }
    throw err;
  }
  if (context.res?.msg) {
    fmAgent.success({ message: context.res.msg }, { timeout: 3000 });
  }
  await next();
}

export { displayFlashMessageMiddleware };

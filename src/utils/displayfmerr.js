// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { fmAgent } from "/src/components/flash_messages/index.js";

function displayfmerr(err, level = "error") {
  if (!err) return;
  return fmAgent[level]({ message: err.message }, { timeout: 4000 });
}

export { displayfmerr };

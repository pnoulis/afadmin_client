import * as React from "react";
import { fmAgent } from "/src/components/flash_messages/index.js";

function genFm() {
  fmAgent.info({
    message:
      "infooteuhseo ueotu heousnoeh useonthu eosuheouseousteo hsoetuoestuhoes",
  });
  fmAgent.warn({ message: "warn" });
  fmAgent.error({ message: "error" });
  fmAgent.success({ message: "success" });
}

export default function ScratchFlashMessages() {
  return (
    <div>
      <h1>scratch flash messages</h1>
      <button onClick={genFm}>make fm</button>
    </div>
  );
}

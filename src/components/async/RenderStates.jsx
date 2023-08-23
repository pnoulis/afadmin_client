// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending, Fail, Success } from "/src/components/async/index.js";

function RenderStates({
  state,
  renderIdle,
  renderPending,
  renderError,
  renderSuccess,
}) {
  switch (state) {
    case "pending":
      return <>{renderPending || <Pending />}</>;
    case "resolved":
      return <>{renderSuccess || <Success />}</>;
    case "rejected":
      return <>{renderError || <Fail />}</>;
    default:
      return <>{renderIdle}</>;
  }
}

export { RenderStates };

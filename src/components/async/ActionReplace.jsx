// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { useAfmachineStatefulAction } from "/src/hooks/index.js";
import { RenderStates } from "/src/components/async/index.js";

function ActionReplace({
  action,
  className,
  timePending = 0,
  timeResolving = 1000,
  timeRejecting = 1000,
  onSettled = () => {},
  children,
}) {
  const state = useAfmachineStatefulAction(action, {
    timePending,
    timeResolving,
    timeRejecting,
    onSettled,
  });

  switch (state) {
    case "idle":
      return children;
    default:
      return <RenderStates state={state} />;
  }
}

export { ActionReplace };

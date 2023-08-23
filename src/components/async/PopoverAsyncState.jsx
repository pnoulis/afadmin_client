// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { BasicDialog } from "react_utils/dialogs";
// ------------------------------ project  ------------------------------- //
import { useAfmachineStatefulAction } from "/src/hooks/index.js";
import { RenderStates } from "/src/components/async/index.js";

function PopoverAsyncState({
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
  const [open, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (state === "pending") setIsOpen(true);
    else if (open && state === "idle") {
      setIsOpen(false);
    }
  }, [state]);

  return open ? (
    <BasicDialog.Provider initialOpen>
      <StyleDialogContent className={className}>
        <RenderStates state={state} />
      </StyleDialogContent>
    </BasicDialog.Provider>
  ) : (
    children
  );
}

const StyleDialogContent = styled(BasicDialog.Content)`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  ::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export { PopoverAsyncState };

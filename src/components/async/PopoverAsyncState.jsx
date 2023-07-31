import * as React from "react";
import { Svg } from "react_utils/svgs";
import styled from "styled-components";
import { BasicDialog } from "react_utils/dialogs";
import { MoonLoader } from "react-spinners";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";
import { useAfmachineStatefulAA } from "/src/hooks/index.js";

function PopoverAsyncState({
  action,
  className,
  timePending = 0,
  timeResolving = 1000,
  timeRejecting = 1000,
}) {
  const state = useAfmachineStatefulAA(action, {
    timePending,
    timeResolving,
    timeRejecting,
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
        <RenderStates
          state={state}
          renderPending={<StyleMoonLoader />}
          renderSuccess={
            <StyleSuccessIcon>
              <SuccessIcon />
            </StyleSuccessIcon>
          }
          renderError={
            <StyleFailIcon>
              <FailIcon />
            </StyleFailIcon>
          }
        />
      </StyleDialogContent>
    </BasicDialog.Provider>
  ) : (
    <></>
  );
}

/* --------------- DIALOG ------------------------------ */
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

/* --------------- REMOTE DATA STATES --------------- */
const StyleSuccessIcon = styled(Svg)`
  fill: var(--success-medium);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

const StyleFailIcon = styled(Svg)`
  fill: var(--error-base);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={40} />;
}

function RenderStates({
  state,
  renderIdle,
  renderPending,
  renderError,
  renderSuccess,
}) {
  switch (state) {
    case "pending":
      return <>{renderPending}</>;
    case "resolved":
      return <>{renderSuccess}</>;
    case "rejected":
      return <>{renderError}</>;
    default:
      return <>{renderIdle}</>;
  }
}

export { PopoverAsyncState };

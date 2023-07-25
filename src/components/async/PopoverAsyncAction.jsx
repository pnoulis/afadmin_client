import * as React from "react";
import { Svg } from "react_utils/svgs";
import styled from "styled-components";
import { useAfmachineAsyncAction } from "/src/hooks/index.js";
import { BasicDialog } from "react_utils/dialogs";
import { MoonLoader } from "react-spinners";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function PopoverAsyncAction({ action, className, handleClose, ...options }) {
  const [state, run, data] = useAfmachineAsyncAction(action, {
    timeResolving: options.timeResolving ?? 500,
    timePending: options.timePending ?? 500,
    timeRejecting: options.timeRejecting ?? 500,
  });

  React.useEffect(() => {
    if (state === "idle") {
      run();
    } else {
      handleClose(data);
    }
  }, [data]);

  return (
    <BasicDialog.Provider initialOpen>
      <BasicDialog.Content className={className}>
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
      </BasicDialog.Content>
    </BasicDialog.Provider>
  );
}

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

const StyleMoonLoader = () => (
  <MoonLoader loading color="var(--info-strong)" size={40} />
);

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

export { PopoverAsyncAction };

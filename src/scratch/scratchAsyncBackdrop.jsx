import * as React from "react";
import { Button } from "@mui/material";
import { Svg } from "react_utils";
import styled from "styled-components";
import { afmachine } from "/src/services/afmachine.js";
import { useAfmachineAsyncAction } from "/src/hooks/index.js";
import { BasicDialog } from "react_utils/dialogs";
import { MoonLoader } from "react-spinners";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function useListing() {
  const [state, exec, data] = useAfmachineAsyncAction(afmachine.listPackages, {
    timeResolving: 3000,
  });
  return [state, exec, data];
}

const StyledMiddle = styled(BasicDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  z-index: 100;
`;

const StyleAny = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;

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

function Popover({ className, ...props }) {
  const [state, run, data] = useListing();
  React.useEffect(() => {
    run();
  }, []);
  return (
    <BasicDialog.Provider initialOpen>
      <StyledMiddle>
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
      </StyledMiddle>
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

function StyleMoonLoader() {
  return <MoonLoader loading color="var(--info-strong)" size={40} />
}

export default function ScratchAsyncBackdrop() {
  return (
    <div>
      <h1>scratch async backdrop</h1>
      <div>
        <Popover />
      </div>
    </div>
  );
}

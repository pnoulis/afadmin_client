import * as React from "react";
import styled from "styled-components";
import { RemoteDataStates, Svg } from "react_utils";
import { MoonLoader } from "react-spinners";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/success_icon_filled.svg";
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function AsyncState({ state, children }) {
  switch (state) {
    case "pending":
      return (
        <>
          <StyleMoonLoader />
        </>
      );
    case "resolved":
      return (
        <>
          <StyleSuccessIcon>
            <SuccessIcon />
          </StyleSuccessIcon>
        </>
      );
    case "rejected":
      return (
        <>
          <StyleFailIcon>
            <FailIcon />
          </StyleFailIcon>
        </>
      );
    default:
      return <>{children}</>;
  }
}

const StyleMoonLoader = () => (
  <MoonLoader loading color="var(--info-strong)" size={40} />
);

const StyleFailIcon = styled(Svg)`
  fill: var(--error-base);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

const StyleSuccessIcon = styled(Svg)`
  fill: var(--success-medium);
  pointer-events: none;
  height: 40px;
  width: 40px;
`;

export { AsyncState };

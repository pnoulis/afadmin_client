import * as React from "react";
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/task-success-outlined.svg";
import { Svg } from "react_utils/svgs";
import {
  StyleLayoutFm,
  StyleLayoutFmIcon,
  StyleLayoutFmMessage,
} from "./Styles.jsx";

function SuccessFm({ message }) {
  return (
    <StyleLayoutFm variant="success">
      <StyleLayoutFmIcon>
        <Svg color="white">
          <SuccessIcon />
        </Svg>
      </StyleLayoutFmIcon>
      <StyleLayoutFmMessage>{message}</StyleLayoutFmMessage>
    </StyleLayoutFm>
  );
}

export { SuccessFm };

import * as React from "react";
import { ReactComponent as ErrorIcon } from "agent_factory.shared/ui/icons/error-outlined.svg";
import { Svg } from "react_utils/svgs";
import {
  StyleLayoutFm,
  StyleLayoutFmIcon,
  StyleLayoutFmMessage,
} from "./Styles.jsx";

function ErrorFm({ message }) {
  return (
    <StyleLayoutFm variant="error">
      <StyleLayoutFmIcon>
        <Svg color="white">
          <ErrorIcon />
        </Svg>
      </StyleLayoutFmIcon>
      <StyleLayoutFmMessage>{message}</StyleLayoutFmMessage>
    </StyleLayoutFm>
  );
}

export { ErrorFm };

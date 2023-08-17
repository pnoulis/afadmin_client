import * as React from "react";
import { ReactComponent as WarnIcon } from "agent_factory.shared/ui/icons/warning-outlined.svg";
import { Svg } from "react_utils/svgs";
import {
  StyleLayoutFm,
  StyleLayoutFmIcon,
  StyleLayoutFmMessage,
} from "./Styles.jsx";

function WarnFm({ message }) {
  return (
    <StyleLayoutFm variant="warn">
      <StyleLayoutFmIcon>
        <Svg color="white">
          <WarnIcon />
        </Svg>
      </StyleLayoutFmIcon>
      <StyleLayoutFmMessage>{message}</StyleLayoutFmMessage>
    </StyleLayoutFm>
  );
}

export { WarnFm };

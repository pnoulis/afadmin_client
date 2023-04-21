import * as React from "react";
import { ReactComponent as InfoIcon } from "agent_factory.shared/ui/icons/info-outlined.svg";
import { Svg } from "react_utils/svgs";
import {
  StyleLayoutFm,
  StyleLayoutFmIcon,
  StyleLayoutFmMessage,
} from "./Styles.jsx";

function InfoFm({ message }) {
  return (
    <StyleLayoutFm variant="info">
      <StyleLayoutFmIcon>
        <Svg color="white">
          <InfoIcon />
        </Svg>
      </StyleLayoutFmIcon>
      <StyleLayoutFmMessage>{message}</StyleLayoutFmMessage>
    </StyleLayoutFm>
  );
}

export { InfoFm };

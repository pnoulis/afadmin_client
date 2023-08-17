// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as DarkModeIcon } from "agent_factory.shared/ui/icons/dark-mode-icon.svg";

/**
 * WidgetUITheme
 * @example
 *
 */
function WidgetUITheme({ size, className, style }) {
  return (
    <StyleContainerSvg className={className} style={style}>
      <Svg size={size}>
        <DarkModeIcon />
      </Svg>
    </StyleContainerSvg>
  );
}

const StyleContainerSvg = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
`;

export { WidgetUITheme };

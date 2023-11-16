// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as RestartIcon } from "agent_factory.shared/ui/new-icons/restart-icon.svg";

function WidgetRestart({
  onClick: handleClick = () => {},
  size,
  as,
  tooltipContent = "restart",
  bColor,
  fColor,
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRestart
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          bColor={bColor}
          fColor={fColor}
          {...props}
        >
          <Svg>
            <RestartIcon />
          </Svg>
        </StyleWidgetRestart>
      }
    />
  );
}

const StyleWidgetRestart = styled.div`
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ bColor }) => (bColor ? bColor : "var(--grey-base)")};
  &:hover {
    opacity: 0.8;
  }
  ${({ fColor }) =>
    fColor &&
    `
svg {
  fill: ${fColor}
}
`}
`;

export { WidgetRestart, StyleWidgetRestart };

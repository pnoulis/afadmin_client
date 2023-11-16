// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as WakeupIcon } from "agent_factory.shared/ui/new-icons/wake-up-icon.svg";

function WidgetWakeup({
  onClick: handleClick = () => {},
  size,
  as,
  tooltipContent = "boot",
  bColor,
  fColor,
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetWakeup
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          bColor={bColor}
          fColor={fColor}
          {...props}
        >
          <Svg>
            <WakeupIcon />
          </Svg>
        </StyleWidgetWakeup>
      }
    />
  );
}

const StyleWidgetWakeup = styled.div`
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

export { WidgetWakeup, StyleWidgetWakeup };

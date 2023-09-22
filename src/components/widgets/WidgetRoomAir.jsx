// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as AirIcon } from "agent_factory.shared/ui/new-icons/air-icon.svg";

function WidgetRoomAir({
  onClick: handleClick,
  as,
  size,
  fill,
  tooltipContent = "air room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <div as={as} onClick={handleClick} className={className} {...props}>
          <Svg size={size} color={fill}>
            <AirIcon />
          </Svg>
        </div>
      }
    />
  );
}

const StyledWidgetRoomAir = styled(WidgetRoomAir)`
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
  background-color: ${({ bcolor }) => bcolor || "var(--grey-base)"};
  &:hover {
    opacity: 0.8;
  }
`;

export { WidgetRoomAir, StyledWidgetRoomAir };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as WaterIcon } from "agent_factory.shared/ui/new-icons/water-icon.svg";

function WidgetRoomWater({
  onClick: handleClick,
  as,
  size,
  bcolor,
  fill,
  tooltipContent = "water room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRoomWater
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          bcolor={bcolor}
          {...props}
        >
          <Svg color={fill}>
            <WaterIcon />
          </Svg>
        </StyleWidgetRoomWater>
      }
    />
  );
}

const StyleWidgetRoomWater = styled.div`
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

export { WidgetRoomWater, StyleWidgetRoomWater };

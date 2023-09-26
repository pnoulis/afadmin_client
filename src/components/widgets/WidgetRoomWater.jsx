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
  fill,
  bcolor,
  tooltipContent = "water room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRoomWater
          size={size}
          bcolor={bcolor}
          as={as}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg color={fill}>
            <WaterIcon />
          </Svg>
          <p>water</p>
        </StyleWidgetRoomWater>
      }
    />
  );
}

const StyleWidgetRoomWater = styled("div")`
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "70px"};
  height: ${({ size }) => size || "70px"};
  padding: 6px 0 3px 0;
  font-family: Saira;
  font-size: var(--tx-xs);
  letter-spacing: 1px;
  font-weight: 550;
  text-transform: uppercase;
  border-radius: var(--br-nl);
  background-color: ${({ bcolor }) => bcolor || "var(--grey-base)"};
  &:hover {
    opacity: 0.8;
  }
`;

export { WidgetRoomWater, StyleWidgetRoomWater };

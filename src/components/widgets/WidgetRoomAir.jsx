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
  bcolor,
  tooltipContent = "air room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyledWidgetRoomAir
          as={as}
          onClick={handleClick.bind(null, "air")}
          size={size}
          bcolor={bcolor}
          className={className}
          {...props}
        >
          <Svg color={fill}>
            <AirIcon />
          </Svg>
          <p>air</p>
        </StyledWidgetRoomAir>
      }
    />
  );
}

const StyledWidgetRoomAir = styled("div")`
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

export { WidgetRoomAir, StyledWidgetRoomAir };

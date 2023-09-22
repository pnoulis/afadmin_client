// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as EarthIcon } from "agent_factory.shared/ui/new-icons/earth-icon.svg";

function WidgetRoomEarth({
  onClick: handleClick,
  as,
  size,
  tooltipContent = "earth room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRoomEarth
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg>
            <EarthIcon />
          </Svg>
        </StyleWidgetRoomEarth>
      }
    />
  );
}

const StyleWidgetRoomEarth = styled.div`
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
  background-color: var(--grey-base);
  &:hover {
    opacity: 0.8;
  }
`;

export { WidgetRoomEarth, StyleWidgetRoomEarth };

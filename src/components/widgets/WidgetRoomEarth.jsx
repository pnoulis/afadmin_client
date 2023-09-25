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
  fill,
  bcolor,
  tooltipContent = "earth room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRoomEarth
          bcolor={bcolor}
          size={size}
          as={as}
          onClick={handleClick.bind(null, 'earth')}
          className={className}
          {...props}
        >
          <Svg color={fill}>
            <EarthIcon />
          </Svg>
          <p>earth</p>
        </StyleWidgetRoomEarth>
      }
    />
  );
}

const StyleWidgetRoomEarth = styled("div")`
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

export { WidgetRoomEarth, StyleWidgetRoomEarth };

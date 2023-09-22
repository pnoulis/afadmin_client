// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as FireIcon } from "agent_factory.shared/ui/new-icons/fire-icon.svg";

function WidgetRoomFire({
  onClick: handleClick,
  as,
  size,
  fill,
  bcolor,
  tooltipContent = "fire room",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRoomFire
          as={as}
          size={size}
          onClick={handleClick}
          bcolor={bcolor}
          className={className}
          {...props}
        >
          <Svg color={fill}>
            <FireIcon />
          </Svg>
        </StyleWidgetRoomFire>
      }
    />
  );
}

const StyleWidgetRoomFire = styled.div`
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

export { WidgetRoomFire, StyleWidgetRoomFire };

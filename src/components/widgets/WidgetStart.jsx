import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as StartIcon } from "agent_factory.shared/ui/icons/play_fill.svg";

function WidgetStart({
  onClick: handleClick,
  as,
  size,
  tooltipContent,
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetStart
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg>
            <StartIcon />
          </Svg>
        </StyleWidgetStart>
      }
    />
  );
}

const StyleWidgetStart = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 7px;
  border-radius: 50%;
  background-color: var(--primary-base);
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
    position: relative;
    left: 3px;
  }
`;

export { WidgetStart };

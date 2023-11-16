import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as ArrowIcon } from "agent_factory.shared/ui/icons/arrow_back.svg";

function WidgetArrow({
  onClick: handleClick,
  size,
  tooltipContent = "back",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetArrow
          size={size}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg>
            <ArrowIcon />
          </Svg>
        </StyleWidgetArrow>
      }
    />
  );
}

const StyleWidgetArrow = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--primary-base);
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
  }
`;

export { WidgetArrow, StyleWidgetArrow };

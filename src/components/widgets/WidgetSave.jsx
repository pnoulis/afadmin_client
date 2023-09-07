import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as SaveIcon } from "agent_factory.shared/ui/icons/save_1.svg";

function WidgetSave({
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
        <StyleWidgetSave
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg>
            <SaveIcon />
          </Svg>
        </StyleWidgetSave>
      }
    />
  );
}

const StyleWidgetSave = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"}
  border: 3px solid transparent;
  padding: 11px;
  border-radius: 50%;
  background-color: var(--primary-base);
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
  }
`;

export { WidgetSave };

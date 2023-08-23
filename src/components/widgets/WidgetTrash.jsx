// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as TrashIcon } from "agent_factory.shared/ui/icons/trash_2.svg";

function WidgetTrash({
  onClick: handleClick,
  size,
  tooltipContent = "remove",
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetTrash
          size={size}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg>
            <TrashIcon />
          </Svg>
        </StyleWidgetTrash>
      }
    />
  );
}

const StyleWidgetTrash = styled.div`
  cursor: pointer;
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--grey-base);
  &:hover {
    opacity: 0.8;
  }
`;

export { WidgetTrash };

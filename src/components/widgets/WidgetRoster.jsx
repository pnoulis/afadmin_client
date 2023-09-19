// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { TooltipDefault } from "/src/components/tooltips/index.js";
import { ReactComponent as RosterIcon } from "agent_factory.shared/ui/new-icons/live-view-players-icon.svg";

function WidgetRoster({
  onClick: handleClick,
  size,
  as,
  tooltipContent,
  className,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <StyleWidgetRoster
          as={as}
          size={size}
          onClick={handleClick}
          className={className}
          {...props}
        >
          <Svg>
            <RosterIcon />
          </Svg>
        </StyleWidgetRoster>
      }
    />
  );
}

const StyleWidgetRoster = styled.div`
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 6px;
  border-radius: 50%;
  background-color: var(--grey-base);
  &:hover {
    opacity: 0.8;
  }
`;

export { WidgetRoster, StyleWidgetRoster };

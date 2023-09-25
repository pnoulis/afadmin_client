// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Filter } from "./Filter.jsx";
import { FiltersList } from "./FiltersList.jsx";
import { TooltipDefault } from "/src/components/tooltips/index.js";

function TimeFilters({
  timeFilter,
  onFilterSelect: handleTimeFilterSelect,
  className,
  style,
}) {
  return (
    <FiltersList className={className} style={style}>
      <WidgetTimeFilter
        $isActive={timeFilter === "day"}
        onClick={handleTimeFilterSelect.bind(null, "day")}
        tooltipContent="select today's teams"
      >
        day
      </WidgetTimeFilter>
      <WidgetTimeFilter
        $isActive={timeFilter === "week"}
        onClick={handleTimeFilterSelect.bind(null, "week")}
        tooltipContent="select week's teams"
      >
        week
      </WidgetTimeFilter>
      <WidgetTimeFilter
        $isActive={timeFilter === "month"}
        onClick={handleTimeFilterSelect.bind(null, "month")}
        tooltipContent="select month's teams"
      >
        month
      </WidgetTimeFilter>
    </FiltersList>
  );
}

function WidgetTimeFilter({
  onClick: handleClick,
  as,
  size,
  fill,
  $isActive,
  bcolor,
  tooltipContent = "time filter",
  className,
  style,
  children,
  ...props
}) {
  return (
    <TooltipDefault
      content={tooltipContent}
      trigger={
        <FilterTime
          as={as}
          onClick={handleClick}
          className={className}
          style={style}
          $isActive={$isActive}
        >
          {children}
        </FilterTime>
      }
    />
  );
}

const FilterTime = styled("div")`
  flex: 1;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: var(--br-sm);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--primary-base)" : "var(--grey-base)"};
  color: ${({ $isActive }) => ($isActive ? "white" : "black")};
  font-family: Saira;
  letter-spacing: 1px;
  font-size: var(--tx-xs);
  font-weight: 550;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;

export { TimeFilters };

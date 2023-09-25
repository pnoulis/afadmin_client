// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled, { css } from "styled-components";
// ------------------------------ own libs ------------------------------- //

// ------------------------------ project  ------------------------------- //
import {
  WidgetRoomAir,
  WidgetRoomFire,
  WidgetRoomEarth,
  WidgetRoomWater,
} from "/src/components/widgets/index.js";
import { FiltersList } from "./FiltersList.jsx";

function isActive(filters, filter) {
  for (let i = 0; i < filters.length; i++) {
    if (filters[i] === filter) return true;
  }
  return false;
}

function FilterRoomType({ filters, onFilterSelect: handleFilterSelect }) {
  return (
    <FiltersList>
      <FilterListItem $active={isActive(filters, "air")}>
        <WidgetRoomAir
          onClick={handleFilterSelect}
          tooltipContent="select air rooms"
        />
      </FilterListItem>
      <FilterListItem $active={isActive(filters, "fire")}>
        <WidgetRoomFire
          onClick={handleFilterSelect}
          tooltipContent="select fire rooms"
        />
      </FilterListItem>
      <FilterListItem $active={isActive(filters, "earth")}>
        <WidgetRoomEarth
          onClick={handleFilterSelect}
          tooltipContent="select earth rooms"
        />
      </FilterListItem>
      <FilterListItem $active={isActive(filters, "water")}>
        <WidgetRoomWater
          onClick={handleFilterSelect}
          tooltipContent="select water rooms"
        />
      </FilterListItem>
    </FiltersList>
  );
}

const cssFilter = css`
  div {
    background-color: var(--primary-base) !important;
    color: white !important;
  }

  div > svg {
    fill: white !important;
  }
`;

const FilterListItem = styled("li")`
  ${({ $active }) => $active && cssFilter}
`;

export { FilterRoomType };

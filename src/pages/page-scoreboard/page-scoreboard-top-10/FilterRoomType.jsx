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

function FilterRoomType({ filter, onFilterSelect: handleFilterSelect }) {
  return (
    <FiltersList>
      <FilterListItem $active={filter?.value === "AIR"}>
        <WidgetRoomAir
          onClick={handleFilterSelect.bind(null, {
            type: "perElement",
            value: "AIR",
          })}
          tooltipContent="select air room top 10"
        />
      </FilterListItem>
      <FilterListItem $active={filter?.value === "FIRE"}>
        <WidgetRoomFire
          onClick={handleFilterSelect.bind(null, {
            type: "perElement",
            value: "FIRE",
          })}
          tooltipContent="select fire room top 10"
        />
      </FilterListItem>
      <FilterListItem $active={filter?.value === "EARTH"}>
        <WidgetRoomEarth
          onClick={handleFilterSelect.bind(null, {
            type: "perElement",
            value: "EARTH",
          })}
          tooltipContent="select earth room top 10"
        />
      </FilterListItem>
      <FilterListItem $active={filter?.value === "WATER"}>
        <WidgetRoomWater
          onClick={handleFilterSelect.bind(null, {
            type: "perElement",
            value: "WATER",
          })}
          tooltipContent="select water room top 10"
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

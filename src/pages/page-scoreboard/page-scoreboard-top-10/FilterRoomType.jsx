// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //

// ------------------------------ project  ------------------------------- //
import {
  WidgetRoomAir,
  WidgetRoomFire,
  WidgetRoomEarth,
  WidgetRoomWater,
} from "/src/components/widgets/index.js";
import { Filter } from "./Filter.jsx";
import { FiltersList } from "./FiltersList.jsx";

function FilterRoomType() {
  return (
    <FiltersList>
      <Filter>
        <WidgetRoomAir style={{ unset: "all" }} />
      </Filter>
      <Filter>
        <WidgetRoomFire />
      </Filter>
      <Filter>
        <WidgetRoomEarth />
      </Filter>
      <Filter>
        <WidgetRoomWater />
      </Filter>
    </FiltersList>
  );
}

export { FilterRoomType };

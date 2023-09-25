// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pill } from "./Pill.jsx";

function TagsArea({
  filters,
  onFilterSelect: handleFilterSelect,
  className,
  style,
}) {
  filters ??= [];
  return (
    <StyledTagsArea>
      {filters.map((filter, i) => (
        <Pill onClick={handleFilterSelect.bind(null, filter)} key={i}>
          {filter}
        </Pill>
      ))}
    </StyledTagsArea>
  );
}

const StyledTagsArea = styled("ul")`
  background-color: var(--grey-base);
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  max-height: 120px;
  overflow-y: scroll;
  scrollbar-width: none;
  border-radius: var(--br-lg);
  display: flex;
  padding: 20px;
  flex-flow: row wrap;
  gap: 20px;
`;

export { TagsArea };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import {
  WidgetPlus,
  WidgetSave,
  WidgetTrash,
  WidgetStart,
} from "/src/components/widgets/index.js";

function PkgToolbar({ onOutletSelect, className, style }) {
  return (
    <StyledPkgToolbar className={className} style={style}>
      <StyledWidgetPlus forwardedAs="li" tooltipContent="add package" />
      <StyledWidgetTrash forwardedAs="li" tooltipContent="remove package" />
      <WidgetSave as="li" tooltipContent="upload package" />
      <WidgetStart as="li" tooltipContent="activate package" />
    </StyledPkgToolbar>
  );
}

const StyledPkgToolbar = styled("ul")`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
`;

const StyledWidgetPlus = styled(WidgetPlus)`
  background-color: var(--primary-base);
  svg {
    fill: white;
  }
`;
const StyledWidgetTrash = styled(WidgetTrash)`
  background-color: var(--primary-base);
  svg {
    fill: white;
  }
`;

export { PkgToolbar };

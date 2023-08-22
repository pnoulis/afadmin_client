import * as React from "react";
import styled from "styled-components";
import { Tooltip, TooltipTrigger, TooltipContent } from "react_utils";

function TooltipDefault({ trigger, content }) {
  return (
    <Tooltip placement="top" offset={20}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <StyleTooltipContent>{content}</StyleTooltipContent>
    </Tooltip>
  );
}

const StyleTooltipContent = styled(TooltipContent)`
  font-family: Saira;
  padding: 7px 12px;
  border: 1px solid var(--grey-light);
  border-radius: var(--br-sm);
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  text-transform: lowercase;
  text-align: center;
  z-index: 100;
  box-shadow: var(--sd-0);
`;

export { TooltipDefault };

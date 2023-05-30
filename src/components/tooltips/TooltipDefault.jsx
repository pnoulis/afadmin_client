import * as React from "react";
import styled from "styled-components";
import { Tooltip, TooltipTrigger, TooltipContent } from "react_utils";

function TooltipDefault({ trigger, content }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <StyleTooltipContent>{content}</StyleTooltipContent>
    </Tooltip>
  );
}

const StyleTooltipContent = styled(TooltipContent)`
  background-color: white;
  padding: 10px 12px;
  border-radius: var(--br-sm);
  font-family: NoirPro-Light;
  font-size: var(--tx-nl);
  letter-spacing: 1.5px;
  color: var(--primary-light);
  text-transform: lowercase;
  text-align: center;
  box-shadow: var(--sd-14);
  z-index: 100;
`;

export { TooltipDefault };

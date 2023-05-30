import * as React from "react";
import styled from "styled-components";
import { Tooltip, TooltipTrigger, TooltipContent, Svg } from "react_utils";

export default function ScratchTooltips() {
  return (
    <div>
      <h1>scratch tooltips</h1>
      <div>
        <Tooltip>
          <TooltipTrigger>yolo</TooltipTrigger>
          <TooltipContent>ouoeuoeu</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as SuccessIcon } from "agent_factory.shared/ui/icons/tick.svg";

function Success({ size, className }) {
  return (
    <StyleSvgContainer className={className}>
      <Svg>
        <SuccessIcon />
      </Svg>
    </StyleSvgContainer>
  );
}

const StyleSvgContainer = styled("div")`
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--grey-light);
  padding: 33px;
  svg {
    fill: var(--success-medium);
    position: relative;
    bottom: -2px;
  }
`;

export { Success };

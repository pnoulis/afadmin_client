// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function Fail({ size, className }) {
  return (
    <StyleSvgContainer className={className}>
      <Svg>
        <FailIcon />
      </Svg>
    </StyleSvgContainer>
  );
}

const StyleSvgContainer = styled("div")`
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--primary-subtler);
  padding: 33px;
  > svg {
    fill: var(--error-medium);
    position: relative;
    top: -3px;
  }
`;

export { Fail };

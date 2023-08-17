// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { MoonLoader } from "react-spinners";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ReactComponent as FailIcon } from "agent_factory.shared/ui/icons/warning_icon_filled.svg";

function Pending({ size, color, className }) {
  return (
    <StyleSvgContainer className={className}>
      <MoonLoader loading color="var(--info-strong)" size="70px" />
    </StyleSvgContainer>
  );
}

const StyleSvgContainer = styled("div")`
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--primary-subtler);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Pending };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
import { MoonLoader } from "react-spinners";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

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
  background-color: var(--grey-light);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Pending };

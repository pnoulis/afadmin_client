// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import AFLogo2Brand from "agent_factory.shared/ui/brand/logo-white.png";

function AFLogo2({ className }) {
  return (
    <StyleImgContainer className={className}>
      <img src={AFLogo2Brand} alt="agent factory logo" />
    </StyleImgContainer>
  );
}

const StyleImgContainer = styled.div`
  > img {
    object-position: center;
  }
`;

export { AFLogo2 };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import AFLogo3Brand from "agent_factory.shared/ui/brand/logo-agent-white.png";

function AFLogo3({ className }) {
  return (
    <StyleImgContainer className={className}>
      <img src={AFLogo3Brand} alt="agent factory logo" />
    </StyleImgContainer>
  );
}

const StyleImgContainer = styled.div`
  > img {
    object-position: center;
  }
`;

export { AFLogo3 };

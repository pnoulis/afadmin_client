// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import AFLogo1Brand from "agent_factory.shared/ui/brand/logo_1.png";

function AFLogo1({ className }) {
  return (
    <StyleImgContainer className={className}>
      <img src={AFLogo1Brand} alt="agent factory logo" />
    </StyleImgContainer>
  );
}

const StyleImgContainer = styled.div`
  > img {
    object-position: center;
  }
`;

export { AFLogo1 };

import * as React from "react";
import styled from "styled-components";
import { FormRegisterNewPlayer } from "./FormRegisterNewPlayer";

function RouteRegistrationPlayer() {
  return (
    <StyleRouteRegistrationPlayer>
      <StyleFormRegisterNewPlayer />
    </StyleRouteRegistrationPlayer>
  );
}

const StyleRouteRegistrationPlayer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleFormRegisterNewPlayer = styled(FormRegisterNewPlayer)`
  unset: all;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  width: 350px;
  align-items: center;
  gap: 20px;

  & > legend {
    display: none;
  }

  & button {
    margin-top: 30px;
  }
`;

export { RouteRegistrationPlayer };

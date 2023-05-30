import * as React from "react";
import styled from "styled-components";
import { FormLogin } from "./FormLogin.jsx";
import { Svg } from "react_utils/svgs";
import { ReactComponent as LogoIcon } from "agent_factory.shared/ui/brand/maze_logo.svg";

function RouteLogin() {
  return (
    <StyleRouteLogin>
      <FormLogin />
      <StyleLogoIcon>
        <LogoIcon />
      </StyleLogoIcon>
    </StyleRouteLogin>
  );
}

const StyleRouteLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-light);
`;

const StyleLogoIcon = styled(Svg)`
  position: absolute;
  max-height: 70%;
  width: max-content;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
`;

export { RouteLogin };

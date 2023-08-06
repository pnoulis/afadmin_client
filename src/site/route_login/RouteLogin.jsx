import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as LogoIcon } from "agent_factory.shared/ui/brand/maze_logo.svg";
import { FormLogin } from "./FormLogin.jsx";
import { afmachine, AsyncAction } from "/src/services/afmachine.js";
import { PopoverAsyncState } from "/src/components/async/PopoverAsyncState.jsx";
import { session } from "/src/services/session.js";
import { useNavigate } from "react-router-dom";
import { useSession } from "/src/hooks/index.js";

const LoginAA = new AsyncAction(function (cashier) {
  return afmachine.loginCashier(cashier);
});

function RouteLogin() {
  const navigate = useNavigate();
  const { user, login, logout } = useSession();

  function handleLoginFormSubmit(form, cb) {
    login(form).then(() => {
      cb();
      navigate("/");
    });
  }

  return (
    <StyleRouteLogin>
      <PopoverAsyncState
        action={login}
      >
        <FormLogin onSubmit={handleLoginFormSubmit} />
      </PopoverAsyncState>
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
  background-color: var(--grey-medium);
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

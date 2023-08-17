// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
// ------------------------------ project  ------------------------------- //
import { ButtonIconText } from "/src/components/buttons/index.js";
import { ReactComponent as LogoutIcon } from "agent_factory.shared/ui/icons/logout-filled.svg";

const StyleButtonIconText = styled(ButtonIconText.Button)`
  width: 100%;
  padding: 5px 10px;
  border: none;
  gap: 5px;
  ${ButtonIconText.Text} {
    padding-left: 7px;
    font-size: var(--tx-sm);
    flex: 1;
    text-align: center;
    font-weight: 550;
    border-left: 2px solid black;
  }
  ${ButtonIconText.Icon} {
    box-sizing: border-box;
    padding: 8px;
    fill: black;
  }
`;

function Logout() {
  return (
    <StyleButtonIconText>
      <ButtonIconText.Icon>
        <LogoutIcon />
      </ButtonIconText.Icon>
      <ButtonIconText.Text>logout</ButtonIconText.Text>
    </StyleButtonIconText>
  );
}

export { Logout };

import * as React from "react";
import styled from "styled-components";
import { FormPlayer } from "/src/components/forms/index.js";
import { useContextRegistration } from "/src/stores/index.js";

function RouteRegistrationPlayer() {
  const { handleFormPlayerSubmit } = useContextRegistration();
  return (
    <StyleRouteRegistrationPlayer>
      <StyleFormPlayer onSubmit={handleFormPlayerSubmit} />
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

const StyleFormPlayer = styled(FormPlayer)`
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

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { AFLogo2, AFLogo3 } from "/src/components/logos/index.js";
import { FormLoginAdministrator } from "/src/pages/login/FormLoginAdministrator.jsx";
import background from "agent_factory.shared/ui/backgrounds/homepage-background-1920x1080px.png";

function PageLogin() {
  return (
    <StylePageLogin>
      <header>
        <StyleAFLogo2 />
      </header>
      <section>
        <FormLoginAdministrator />
      </section>
      <VerticalRule />
      <section>
        <StyleAFLogo3 />
      </section>
    </StylePageLogin>
  );
}

const StyleAFLogo2 = styled(AFLogo2)``;

const StyleAFLogo3 = styled(AFLogo3)``;

const StylePageLogin = styled("div")`
  background-image: url(${background});
  background-size: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 32% max-content;
  row-gap: 60px;
  padding: 50px;
  column-gap: 80px;

  > header {
    grid-column: 1 / 4;
    width: 100%;
    height: 100%;
  }

  > section:nth-of-type(1) {
    width: max-content;
    justify-self: end;
    align-self: center;
  }

  > section:nth-of-type(2) {
    width: max-content;
    justify-self: start;
    align-self: center;
  }
`;

const VerticalRule = styled("div")`
  height: 400px;
  top: 50%;
  left: 50%;
  width: 3px;
  background-color: white;
  border-radius: 20px;
  opacity: 0.8;
  margin-left: 3px;
`;

export { PageLogin };

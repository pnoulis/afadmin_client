// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import CementBackground from "agent_factory.shared/ui/backgrounds/white-cement-background.png";

/**
 * Main
 * @example
 *
 */

const Main = styled("main")`
  box-sizing: border-box;
  grid-area: main;
  background-image: url(${CementBackground});
`;

export { Main };

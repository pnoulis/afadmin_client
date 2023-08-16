// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

/**
 * Header
 * @example
 *
 */

const Header = styled("header")`
  box-sizing: border-box;
  grid-area: header;
  background-color: var(--grey-base);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 15px;
  gap: 15px;
`;

export { Header };

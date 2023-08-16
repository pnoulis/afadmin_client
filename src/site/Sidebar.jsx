// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import background from "agent_factory.shared/ui/new-icons/sidebar-250x1080px.png";

/**
 * Sidebar
 * @example
 *
 */

const Sidebar = styled("aside")`
  box-sizing: border-box;
  grid-area: sidebar;
  background-image: url(${background});
  background-size: contain;
  padding: 40px 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
`;

export { Sidebar };

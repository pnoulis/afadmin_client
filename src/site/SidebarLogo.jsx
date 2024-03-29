// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { home } from "/src/links.jsx";
import SiteLogo from "agent_factory.shared/ui/brand/logo_1.png";

/**
 * SidebarLogo
 * @example
 *
 */

function SidebarLogo({ className }) {
  return (
    <section className={className}>
      <StyleHomeNavLink>
        <img src={SiteLogo} alt="agent-factory-logo" />
      </StyleHomeNavLink>
    </section>
  );
}

const StyleHomeNavLink = styled(home.asComponent)`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  img {
    margin-left: -2.5px;
  }
`;

export { SidebarLogo };

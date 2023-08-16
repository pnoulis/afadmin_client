// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { Svg } from "react_utils/svgs";
import { ReactComponent as AgentFactoryLogo } from "agent_factory.shared/ui/new-icons/SVG/sidebar/logo-badge.svg";
// ------------------------------ project  ------------------------------- //
import { home } from "/src/links.jsx";

/**
 * SidebarLogo
 * @example
 *
 */

function SidebarLogo({ className }) {
  return (
    <section className={className}>
      <home.asComponent style={{ display: "block" }}>
        <Svg>
          <AgentFactoryLogo />
        </Svg>
      </home.asComponent>
    </section>
  );
}

export { SidebarLogo };

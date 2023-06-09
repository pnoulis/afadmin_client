import * as React from "react";
import { Outlet } from "react-router-dom";
import "agent_factory.shared/ui/reset.css";
import "agent_factory.shared/ui/design_system.css";
import "agent_factory.shared/ui/fonts.css";
import "agent_factory.shared/ui/wristband.css";
import "/assets/app.css";

import {
  StyleLayoutRoot,
  StyleLayoutHeader,
  StyleLayoutSidebar,
  StyleLayoutMain,
} from "./LayoutSite.jsx";

import { SiteHeader } from "./site_header/SiteHeader.jsx";
import { SiteSidebar } from "./site_sidebar/SiteSidebar.jsx";

function Site() {
  return (
    <StyleLayoutRoot>
      <StyleLayoutHeader>
        <SiteHeader />
      </StyleLayoutHeader>
      <StyleLayoutSidebar>
        <SiteSidebar />
      </StyleLayoutSidebar>
      <StyleLayoutMain>
        <Outlet />
      </StyleLayoutMain>
    </StyleLayoutRoot>
  );
}

export { Site };

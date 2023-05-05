import * as React from "react";
import { Outlet } from "react-router-dom";

// ASSETS
import "agent_factory.shared/ui/reset.css";
import "agent_factory.shared/ui/design_system.css";
import "agent_factory.shared/ui/fonts.css";
import "agent_factory.shared/ui/wristband.css";
import "/assets/app.css";

// LAYOUTS
import {
  AppLayout,
  AppLayoutHeader,
  AppLayoutMain,
  AppLayoutSidebar,
  AppHeader,
  AppSidebar,
} from "./site_wide/index.js";

function Site() {
  return (
    <AppLayout>
      <AppLayoutHeader>
        <AppHeader />
      </AppLayoutHeader>
      <AppLayoutSidebar>
        <AppSidebar />
      </AppLayoutSidebar>
      <AppLayoutMain>
        <Outlet />
      </AppLayoutMain>
    </AppLayout>
  );
}

export { Site };

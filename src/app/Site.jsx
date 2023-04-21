import * as React from "react";

// ASSETS
import "agent_factory.shared/ui/reset.css";
import "agent_factory.shared/ui/design_system.css";
import "agent_factory.shared/ui/fonts.css";
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

function Site({ children }) {
  return (
    <AppLayout>
      <AppLayoutHeader>
        <AppHeader />
      </AppLayoutHeader>
      <AppLayoutSidebar>
        <AppSidebar />
      </AppLayoutSidebar>
      <AppLayoutMain>{children}</AppLayoutMain>
    </AppLayout>
  );
}

export { Site };

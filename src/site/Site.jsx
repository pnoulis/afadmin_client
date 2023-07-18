import * as React from "react";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "./site_header/SiteHeader.jsx";
import { SiteSidebar } from "./site_sidebar/SiteSidebar.jsx";

function Site() {
  return (
    <div className="site-layout">
      <header>
        <SiteHeader />
      </header>
      <aside>
        <SiteSidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { Site };

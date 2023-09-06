// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import * as links from "/src/links.jsx";
import { WidgetAccount } from "/src/components/widgets/index.js";
import { Header } from "/src/site/Header.jsx";
import { SiteWidgetDate } from "/src/site/SiteWidgetDate.jsx";
import { SiteWidgetTime } from "/src/site/SiteWidgetTime.jsx";
import { SiteWidgetUITheme } from "/src/site/SiteWidgetUITheme.jsx";
import { Sidebar } from "/src/site/Sidebar.jsx";
import { SidebarLogo } from "./SidebarLogo.jsx";
import { SidebarNavigation } from "/src/site/SidebarNavigation.jsx";
import { SidebarNavLink } from "/src/site/SidebarNavLink.jsx";
import { Main } from "/src/site/Main.jsx";

function Site() {
  return (
    <div className="site-layout">
      <Header>
        <SiteWidgetDate separator="," />
        <SiteWidgetTime />
        <WidgetAccount />
        <SiteWidgetUITheme />
      </Header>
      <Sidebar>
        <SidebarLogo />
        <SidebarNavigation>
          <SidebarNavLink to={links.registration.path}>
            {links.registration.label}
          </SidebarNavLink>
          <SidebarNavLink to={links.merge.path}>
            {links.merge.label}
          </SidebarNavLink>
          <SidebarNavLink to={links.groupParty.path}>
            {links.groupParty.label}
          </SidebarNavLink>
          <SidebarNavLink to={links.liveView.path}>
            {links.liveView.label}
          </SidebarNavLink>
          <SidebarNavLink to={links.scoreboard.path}>
            {links.scoreboard.label}
          </SidebarNavLink>
          <SidebarNavLink to={links.administrator.path}>
            {links.administrator.label}
          </SidebarNavLink>
        </SidebarNavigation>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export { Site };

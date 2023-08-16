// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import * as links from "/src/links.jsx";
import {
  DateWidget,
  TimeWidget,
  AccountWidget,
  UiThemeWidget,
} from "/src/components/widgets/index.js";
import { Header } from "/src/site/Header.jsx";
import { SiteDateWidget } from "/src/site/SiteDateWidget.jsx";
import { SiteTimeWidget } from "/src/site/SiteTimeWidget.jsx";
import { Sidebar } from "/src/site/Sidebar.jsx";
import { SidebarLogo } from "./SidebarLogo.jsx";
import { SidebarNavigation } from "/src/site/SidebarNavigation.jsx";
import { SidebarNavLink } from "/src/site/SidebarNavLink.jsx";
import { Main } from "/src/site/Main.jsx";

function Site() {
  return (
    <div className="site-layout">
      <Header>
        <SiteDateWidget separator="," />
        <SiteTimeWidget />
        <AccountWidget />
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

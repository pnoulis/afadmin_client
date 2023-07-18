import * as React from "react";
import styled from "styled-components";
import { Header } from "./Header.jsx";
import { Navbar } from "./Navbar.jsx";
import { LangWidget } from "./LangWidget.jsx";
import { TimeWidget } from "./TimeWidget.jsx";
import sidebarBackground from "agent_factory.shared/ui/backgrounds/sidebar.png";

const StyleAppSidebar = styled.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2px 14px;
  grid-area: sidebar;
  background-image: url(${sidebarBackground});
`;

const StyleSidebarHeader = styled.header`
  all: unset;
  box-sizing: border-box;
  flex: 0 1 200px;
  align-self: stretch;
`;

const StyleSidebarLine = styled.hr`
  all: unset;
  box-sizing: border-box;
  height: 2px;
  width: 100%;
  background-color: white;
`;

const StyleSidebarNavBar = styled.nav`
  all: unset;
  box-sizing: border-box;
  flex: 1;
  padding: 15px 0 20px 0;
  align-self: stretch;
`;

const StyleSidebarLangWidget = styled.div`
  all: unset;
  box-sizing: border-box;
`;

const StyleSidebarTimeWidget = styled.div`
  all: unset;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 20px;
`;

function SiteSidebar() {
  return (
    <StyleAppSidebar>
      <StyleSidebarHeader>
        <Header />
      </StyleSidebarHeader>
      <StyleSidebarLine />
      <StyleSidebarNavBar>
        <Navbar />
      </StyleSidebarNavBar>
      <StyleSidebarLangWidget>
        <LangWidget />
      </StyleSidebarLangWidget>
      <StyleSidebarTimeWidget>
        <TimeWidget />
      </StyleSidebarTimeWidget>
    </StyleAppSidebar>
  );
}

export { SiteSidebar };

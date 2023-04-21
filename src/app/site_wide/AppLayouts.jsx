import styled from "styled-components";

const AppLayout = styled.div`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: minmax(40px, max-content) 1fr;
  grid-template-columns: 250px 1fr;
  grid-template-areas: "sidebar header" "sidebar main";
  background-color: var(--grey-subtle);
`;

const AppLayoutHeader = styled.header`
  all: unset;
  box-sizing: border-box;
  grid-area: header;
`;

const AppLayoutSidebar = styled.aside`
  all: unset;
  box-sizing: border-box;
  grid-area: sidebar;
`;

const AppLayoutMain = styled.main`
  all: unset;
  box-sizing: border-box;
  padding: 15px 20px;
  grid-area: main;
`;

export { AppLayout, AppLayoutHeader, AppLayoutSidebar, AppLayoutMain };

import styled from "styled-components";

const StyleLayoutRoot = styled.div`
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

const StyleLayoutHeader = styled.header`
  all: unset;
  box-sizing: border-box;
  grid-area: header;
`;

const StyleLayoutSidebar = styled.aside`
  all: unset;
  box-sizing: border-box;
  grid-area: sidebar;
`;

const StyleLayoutMain = styled.main`
  all: unset;
  box-sizing: border-box;
  padding: 15px 20px;
  grid-area: main;
`;

export {
  StyleLayoutRoot,
  StyleLayoutHeader,
  StyleLayoutSidebar,
  StyleLayoutMain,
};

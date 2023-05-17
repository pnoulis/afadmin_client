import styled from "styled-components";

const PanelLayout = styled.div`
  all: unset;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 115px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "header" "main";
  width: 100%;
  height: 890px;
  padding: 15px;
  background-color: white;
  border-radius: var(--br-xl);
`;

const PanelLayoutHeader = styled.header`
  all: unset;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  grid-area: header;
`;

const PanelLayoutMain = styled.div`
  all: unset;
  box-sizing: border-box;
  grid-area: main;
  margin: 60px 0 10px 0;
  padding: 0 25px;
  overflow-x: scroll;
  overflow-y: scroll;
`;

export { PanelLayout, PanelLayoutHeader, PanelLayoutMain };

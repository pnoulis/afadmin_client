import * as React from "react";
import styled from "styled-components";

function PanelMain({ id, className, children, ...props }) {
  return (
    <StylePanelMain id={id} className={className || ""} {...props}>
      {children}
    </StylePanelMain>
  );
}

const StylePanel = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "header" "main";
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  // row-gap: 20px;
  border-radius: var(--br-xl);
`;

const StylePanelHeader = styled.header`
  grid-area: header;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
  height: 160px;
`;

const StylePanelMain = styled.div`
  all: unset;
  box-sizing: border-box;
  grid-area: main;
  overflow: scroll;
`;

export { StylePanel, PanelMain, StylePanelHeader };

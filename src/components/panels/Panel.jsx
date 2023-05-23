import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils/misc";

function Panel({ children }) {
  return (
    <AncestorDimensions ancestor="main">
      <StylePanel>{children}</StylePanel>
    </AncestorDimensions>
  );
}

const StylePanel = styled.div`
  all: unset;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: 115px 1fr;
  grid-template-columns: 1fr;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 15px;
  background-color: white;
  border-radius: var(--br-xl);
  overflow: auto;
`;

const StylePanelHeader = styled.header`
  grid-area: header;
`;

const StylePanelMain = styled.div`
  grid-area: main;
  height: 100px;
  margin-bottom: 20px;
  background-color: yellow;
`;

export { Panel, StylePanelHeader, StylePanelMain };

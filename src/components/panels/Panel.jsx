import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils/misc";

function PanelMain({ id, className, children, ...props }) {
  return (
    <StylePanelMain id={id} className={className || ""} {...props}>
      <AncestorDimensions ancestor={`#${id}`}>
        <StyleMainScrollarea>{children}</StyleMainScrollarea>
      </AncestorDimensions>
    </StylePanelMain>
  );
}

const StylePanel = styled.div`
  all: unset;
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "header" "main";
  grid-template-rows: 115px 1fr;
  grid-template-columns: 1fr;
  padding: 15px;
  background-color: white;
  border-radius: var(--br-xl);
`;

const StylePanelHeader = styled.header`
  grid-area: header;
`;

const StylePanelMain = styled.div`
  all: unset;
  box-sizing: border-box;
  grid-area: main;
  background-color: yellow;
`;

const StyleMainScrollarea = styled.div`
  all: unset;
  box-sizing: border-box;
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: auto;
`;

export { StylePanel, PanelMain, StylePanelHeader };

import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils/misc";

function PanelMain({ id, className, children, ...props }) {
  return (
    <StylePanelMain id={id} className={className || ""} {...props}>
      <AncestorDimensions ancestor={`#${id}`}>
        <StyleMainScrollarea id="panel-dialog-target">
          {children}
        </StyleMainScrollarea>
      </AncestorDimensions>
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
  row-gap: 20px;
  border-radius: var(--br-xl);
`;

const StylePanelHeader = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
`;

const StylePanelMain = styled.div`
  all: unset;
  box-sizing: border-box;
  grid-area: main;
`;
const StyleMainScrollarea = styled.div`
  all: unset;
  box-sizing: border-box;
  display: block;
  width: ${({ $width }) => `${$width || 0}px`};
  height: ${({ $height }) => `${$height || 0}px`};
  overflow: auto;
`;

export { StylePanel, PanelMain, StylePanelHeader };

import * as React from "react";
import styled, { css } from "styled-components";
import { Svg } from "react_utils/svgs";

const StylePanelHeaderList = styled.ul`
  flex: max-content;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  list-style-type: none;
`;

const StyleListItem = css`
  box-sizing: border-box;
  height: 110px;
  flex: 0 0 150px;
  background-color: var(--grey-base);
  border-radius: var(--br-lg);
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  transition: transform 0.3s;
  backface-visibility: hidden;
  padding: 10px 6px 10px 6px;
  gap: 7px;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateZ(0) scale(1.1);
  }
`;

const StyleItemText = styled.p`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  font-weight: 600;
  font-size: var(--tx-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 4px;
  white-space: wrap;
  line-height: 15px;
  min-height: 30px;
`;

const StyleItemIcon = styled(Svg)`
  fill: black;
  margin: auto;
  max-width: ${({ size }) => size || "50px"};
`;

export { StylePanelHeaderList, StyleListItem, StyleItemText, StyleItemIcon };

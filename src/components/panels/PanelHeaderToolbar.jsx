import * as React from "react";
import styled from "styled-components";
import {
  StylePanelHeaderList,
  StyleListItem,
  StyleItemText,
  StyleItemIcon,
} from "./PanelHeader.jsx";

function PanelHeaderToolbar({ className, children, ...props }) {
  return (
    <StylePanelHeaderList as="ul" className={className || ""} {...props}>
      {children}
    </StylePanelHeaderList>
  );
}

const StyleToolbarItem = styled.li`
  ${StyleListItem}

  &:active {
    background-color: var(--primary-light);
  }

  &:active ${StyleItemText} {
    color: white;
  }

  &:active ${StyleItemIcon} {
    fill: white;
  }
`;

export { PanelHeaderToolbar, StyleToolbarItem };

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
  color: white;
  background-color: var(--primary-base);

  &:active {
    background-color: var(--primary-light);
  }

  ${StyleItemIcon} {
    fill: white;
  }

  &:active ${StyleItemText} {
    color: white;
  }

  &:active ${StyleItemIcon} {
    fill: white;
  }
`;

export { PanelHeaderToolbar, StyleToolbarItem };

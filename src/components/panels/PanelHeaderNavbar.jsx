import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  StylePanelHeaderList,
  StyleListItem,
  StyleItemText,
  StyleItemIcon,
} from "./PanelHeader.jsx";

function PanelHeaderNavbar({ className, children, ...props }) {
  return (
    <StylePanelHeaderList as="nav" className={className} {...props}>
      {children}
    </StylePanelHeaderList>
  );
}

const StyleNavbarLink = styled(NavLink)`
  ${StyleListItem}

  &.active {
    background-color: var(--primary-base);
  }

  &.active ${StyleItemText} {
    color: white;
  }

  &.active ${StyleItemIcon} {
    fill: white;
  }
`;

export { PanelHeaderNavbar, StyleNavbarLink };

import * as React from "react";
import styled from "styled-components";
import { registration, merge, liveView, groupParty } from "/src/site/links.jsx";

const StyleLayoutNavbar = styled.ul`
  all: unset;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  list-style: none;
  li {
    flex: 1;
  }
`;

const StyleNavbarLink = styled(registration.asComponent)`
  all: unset;
  /* Type */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* Dimensions */
  width: 100%;
  aspect-ratio: 3 / 1;
  padding-left: 15%;
  overflow: hidden;
  /* Position */
  position: relative;
  /* Fonts */
  font-size: var(--tx-lg);
  font-weight: bolder;
  text-transform: capitalize;
  letter-spacing: 2px;
  word-spacing: 1px;
  white-space: nowrap;
  color: white;
  /* Effects */
  cursor: pointer;
  border-radius: var(--br-nl);

  &:hover {
    opacity: 0.6;
  }

  &:focus,
  &.active {
    background: var(--primary-base);
  }
  /* Children */
`;

function Navbar() {
  return (
    <StyleLayoutNavbar>
      <StyleNavbarLink to={registration.path}>
        {registration.label}
      </StyleNavbarLink>
      <StyleNavbarLink to={merge.path}>{merge.label}</StyleNavbarLink>
      <StyleNavbarLink to={groupParty.path}>{groupParty.label}</StyleNavbarLink>
      <StyleNavbarLink to={liveView.path}>{liveView.label}</StyleNavbarLink>
    </StyleLayoutNavbar>
  );
}

export { Navbar };

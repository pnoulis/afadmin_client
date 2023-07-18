import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkDefault = styled(NavLink)`
  all: unset;
  box-sizing: content-box;
  text-align: center;
  display: inline-block;
  min-width: 70px;
  padding: 7px 12px;
  font-size: var(--tx-nl);
  font-family: NoirPro-Medium;
  text-transform: uppercase;
  letter-spacing: 2px;
  word-spacing: 1px;
  white-space: nowrap;
  color: white;
  cursor: pointer;
  border-radius: var(--br-nl);
  background: var(--primary-base);

  &:hover {
    opacity: 0.7;
  }
`;

export { LinkDefault };

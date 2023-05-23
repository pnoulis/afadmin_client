import * as React from "react";
import styled from "styled-components";
import {
  Panel,
  StylePanelHeader,
  StylePanelMain,
} from "/src/components/panels/index.js";

function RouteRegistration() {
  return (
    <Panel>
      <StylePanelHeader>panel header</StylePanelHeader>
      <StylePanelMain>panel main</StylePanelMain>
    </Panel>
  );
}

export { RouteRegistration };

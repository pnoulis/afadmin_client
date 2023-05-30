import * as React from "react";
import styled from "styled-components";
import { AncestorDimensions } from "react_utils/misc";
import {
  StylePanel,
  PanelHeader,
  PanelMain,
} from "/src/components/panels/index.js";

export default function ScratchFillMaxParent() {
  return (
    <div>
      <h1>Scratch fill max parent</h1>
      <main style={{ width: "1000px" }}>
        <div id="yolo" style={{ width: "500px", height: "150px" }}>
          <StylePanel>
            <StylePanelMain />
          </StylePanel>
        </div>
      </main>
    </div>
  );
}
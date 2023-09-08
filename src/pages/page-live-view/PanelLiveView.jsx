// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { StylePanel, PanelMain } from "/src/components/panels/index.js";
import {
  HistoryToolbar,
  HistoryToolbarCtx,
} from "/src/components/history-toolbar/index.js";
import { PanelLiveViewHeader } from "./PanelLiveViewHeader.jsx";

function PanelLiveView({ children }) {
  return (
    <HistoryToolbar>
      <StylePanel>
        <HistoryToolbarCtx>
          {({ current }) => current?.() || <PanelLiveViewHeader />}
        </HistoryToolbarCtx>
        <PanelMain id="panel-live-view-main">{children}</PanelMain>
      </StylePanel>
    </HistoryToolbar>
  );
}

export { PanelLiveView };

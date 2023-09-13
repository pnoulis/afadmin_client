// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelLiveView } from "./PanelLiveView.jsx";
import { PanelActionRouter } from "/src/components/panels/index.js";

function PageLiveView() {
  return (
    <PanelActionRouter>
      <PanelLiveView>
        <Outlet />
      </PanelLiveView>
    </PanelActionRouter>
  );
}

export { PageLiveView };

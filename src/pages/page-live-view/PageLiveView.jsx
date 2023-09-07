// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelLiveView } from "./PanelLiveView.jsx";

function PageLiveView() {
  return (
    <PanelLiveView>
      <Outlet />
    </PanelLiveView>
  );
}

export { PageLiveView };

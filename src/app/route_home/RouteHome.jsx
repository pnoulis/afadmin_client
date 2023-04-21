import * as React from "react";
import {
  PanelLayout,
  PanelLayoutHeader,
  PanelLayoutMain,
} from "/src/app/site_wide/index.js";

function RouteHome() {
  return (
    <PanelLayout>
      <PanelLayoutHeader />
      <PanelLayoutMain>
        <div>Crapp, an application template generator. -_-</div>
      </PanelLayoutMain>
    </PanelLayout>
  );
}

export { RouteHome };

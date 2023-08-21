// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { PanelRegistration } from "/src/pages/page-registration/PanelRegistration.jsx";

function PageRegistration() {
  return (
    <PanelRegistration>
      <Outlet />
    </PanelRegistration>
  );
}

export { PageRegistration };

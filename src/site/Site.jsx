import * as React from "react";
import { Outlet } from "react-router-dom";

function Site() {
  return (
    <div>
      <h1>this is the site</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export { Site };

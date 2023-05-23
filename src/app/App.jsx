import * as React from "react";
import { Outlet } from "react-router-dom";
import { ProvideStoreApp } from "./CtxApp.jsx";

function App() {
  return (
    <ProvideStoreApp>
      <Outlet />
    </ProvideStoreApp>
  );
}

export { App };

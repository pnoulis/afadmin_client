import * as React from "react";
import { Outlet } from "react-router-dom";
import { StoreProvideApp } from "../stores/StoreApp.jsx";

function App() {
  return (
    <StoreProvideApp>
      <Outlet />
    </StoreProvideApp>
  );
}

export { App };

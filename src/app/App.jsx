import * as React from "react";
import { Outlet } from "react-router-dom";
import { ContextProvideApp } from "/src/contexts/index.js";
import { useApp } from "./useApp.jsx";

function App() {
  const app = useApp();
  return (
    <ContextProvideApp ctx={app}>
      <Outlet />
    </ContextProvideApp>
  );
}

export { App };

// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { Outlet } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { ContextProvideApp } from "/src/contexts/index.js";
import { useApp } from "/src/app/index.js";

function App() {
  const ctx = useApp();
  return (
    <ContextProvideApp ctx={ctx}>
      <Outlet />
    </ContextProvideApp>
  );
}

export { App };

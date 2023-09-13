// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { useLocation } from "react-router-dom";
// ------------------------------ project  ------------------------------- //
import { PkgActionRoute } from "./PkgActionRouter.jsx";

function RoutePkgRoot({ children, target }) {
  const { pathname } = useLocation();
  return (
    <PkgActionRoute name="index" path={pathname} target={target}>
      {children}
    </PkgActionRoute>
  );
}

function RoutePkgConfig({ children, target }) {
  return (
    <PkgActionRoute name="pkgconfig" target={target}>
      {children}
    </PkgActionRoute>
  );
}

export { RoutePkgRoot, RoutePkgConfig };

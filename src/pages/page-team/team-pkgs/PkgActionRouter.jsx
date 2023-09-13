// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { createActionRouter } from "react-action-router";
// ------------------------------ project  ------------------------------- //

const {
  ContextProvide: ContextProvidePkgActionRouter,
  useContext: useContextPkgActionRouter,
  MountPoint: PkgActionRouterMountPoint,
  ActionRoute: PkgActionRoute,
  useActionRouter: usePkgActionRouter,
} = createActionRouter();

function PkgActionRouter({ children }) {
  const ctx = usePkgActionRouter();
  return (
    <ContextProvidePkgActionRouter ctx={ctx}>
      {children}
    </ContextProvidePkgActionRouter>
  );
}

export {
  PkgActionRouter,
  PkgActionRoute,
  PkgActionRouterMountPoint,
  useContextPkgActionRouter,
};

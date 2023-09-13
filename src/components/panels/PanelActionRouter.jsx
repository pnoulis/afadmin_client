// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { createActionRouter } from "react-action-router";
// ------------------------------ project  ------------------------------- //

const {
  ContextProvide: ContextProvidePanelActionRouter,
  useContext: usePanelActionRouterContext,
  MountPoint: PanelActionRouterMountPoint,
  ActionRoute: PanelActionRoute,
  useActionRouter: usePanelActionRouter,
} = createActionRouter();

function PanelActionRouter({ children }) {
  const ctx = usePanelActionRouter();
  return (
    <ContextProvidePanelActionRouter ctx={ctx}>
      {children}
    </ContextProvidePanelActionRouter>
  );
}

export {
  PanelActionRouter,
  usePanelActionRouterContext,
  PanelActionRoute,
  PanelActionRouterMountPoint,
};

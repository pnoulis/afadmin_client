// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { createActionRouter } from "react-action-router";
// ------------------------------ project  ------------------------------- //

const {
  ContextProvide: ContextProvideTeamInfoActionRouter,
  useContext: useContextTeamInfoActionRouter,
  MountPoint: TeamInfoActionRouterMountPoint,
  ActionRoute: TeamInfoActionRoute,
  useActionRouter: useTeamInfoActionRouter,
} = createActionRouter();

function TeamInfoActionRouter({ children }) {
  const ctx = useTeamInfoActionRouter();
  return (
    <ContextProvideTeamInfoActionRouter ctx={ctx}>
      {children}
    </ContextProvideTeamInfoActionRouter>
  );
}

export {
  TeamInfoActionRouter,
  TeamInfoActionRoute,
  TeamInfoActionRouterMountPoint,
  useContextTeamInfoActionRouter,
  ContextProvideTeamInfoActionRouter,
  useTeamInfoActionRouter,
};

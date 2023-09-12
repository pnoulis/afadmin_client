// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
import { createActionRouter } from "react-action-router";
// ------------------------------ project  ------------------------------- //

const {
  ActionRoute: TeamActionRoute,
  ContextProvide: TeamActionRouterContextProvide,
  useContext: useTeamActionRouterContext,
  useActionRouter: useTeamActionRouter,
} = createActionRouter();

function TeamActionRouter({ children }) {
  const ctx = useTeamActionRouter();
  return (
    <TeamActionRouterContextProvide ctx={ctx}>
      {children}
    </TeamActionRouterContextProvide>
  );
}

export {
  TeamActionRouter,
  TeamActionRoute,
  TeamActionRouterContextProvide,
  useTeamActionRouterContext,
  useTeamActionRouter,
};

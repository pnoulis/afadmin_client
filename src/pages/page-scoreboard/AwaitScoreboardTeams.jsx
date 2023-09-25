// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await, useRouteLoaderData } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";

function AwaitScoreboardTeams({ style, children, fallback }) {
  const loadTeams = useRouteLoaderData("scoreboard-root");
  debug(loadTeams, "load teams");
  return (
    <React.Suspense
      fallback={
        fallback || (
          <div style={style}>
            <Pending />
          </div>
        )
      }
    >
      <Await resolve={loadTeams.scoreboard}>{children}</Await>
    </React.Suspense>
  );
}

export { AwaitScoreboardTeams };

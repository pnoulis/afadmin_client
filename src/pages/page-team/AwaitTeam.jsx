// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";

function AwaitTeam({ style, children, fallback }) {
  const loadPackages = useLoaderData();
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
      <Await resolve={loadPackages.team}>{(team) => children(team)}</Await>
    </React.Suspense>
  );
}

export { AwaitTeam };

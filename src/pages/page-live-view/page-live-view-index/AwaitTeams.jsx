// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";

function AwaitTeams({ style, children }) {
  const loadTeams = useLoaderData();
  return (
    <React.Suspense
      fallback={
        <div style={style}>
          <Pending />
        </div>
      }
    >
      <Await resolve={loadTeams.teams}>
        {(teams) => children(teams || [])}
      </Await>
    </React.Suspense>
  );
}

export { AwaitTeams };

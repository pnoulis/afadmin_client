// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await, useRouteLoaderData } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";

function AwaitScoreboardDevices({ style, children, fallback }) {
  const loadScoreboardDevices = useLoaderData();
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
      <Await resolve={loadScoreboardDevices.scoreboardDevices}>
        {(scoreboards) => children(scoreboards)}
      </Await>
    </React.Suspense>
  );
}

export { AwaitScoreboardDevices };

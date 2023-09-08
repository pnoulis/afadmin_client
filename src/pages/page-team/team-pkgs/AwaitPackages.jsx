// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";

function AwaitPackages({ style, children }) {
  const loadPackages = useLoaderData();
  return (
    <React.Suspense
      fallback={
        <div style={style}>
          <Pending />
        </div>
      }
    >
      <Await resolve={loadPackages.packages}>
        {(pkgs) => children(pkgs || [])}
      </Await>
    </React.Suspense>
  );
}

export { AwaitPackages };

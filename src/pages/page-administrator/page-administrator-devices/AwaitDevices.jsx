// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";
import { smallid } from "js_utils/uuid";

function AwaitDevices({ style, children, fallback }) {
  const loadDevices = useLoaderData();
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
      <Await resolve={loadDevices.devices}>
        {(devices) => children(devices, smallid())}
      </Await>
    </React.Suspense>
  );
}

export { AwaitDevices };

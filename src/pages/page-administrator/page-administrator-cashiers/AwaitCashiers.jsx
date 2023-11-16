// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";
import { smallid } from "js_utils/uuid";

function AwaitCashiers({ style, children, fallback }) {
  const loadCashiers = useLoaderData();
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
      <Await resolve={loadCashiers.cashiers}>
        {(cashiers) => children(cashiers, smallid())}
      </Await>
    </React.Suspense>
  );
}

export { AwaitCashiers };

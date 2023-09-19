// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import { useLoaderData, Await, useRevalidator } from "react-router-dom";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //
import { Pending } from "/src/components/async/index.js";
import { useAfmachineSubscription } from "/src/hooks/index.js";

function AwaitTeams({ style, children }) {
  const loadTeams = useLoaderData();
  const revalidator = useRevalidator();

  function handleMsg(...args) {
    revalidator.revalidate();
  }
  useAfmachineSubscription("onMergeGroupTeam", handleMsg);
  useAfmachineSubscription("onMergeTeam", handleMsg);
  useAfmachineSubscription("onRemovePackage", handleMsg);
  useAfmachineSubscription("onAddPackage", handleMsg);
  useAfmachineSubscription("onStartTeam", handleMsg);
  return (
    <React.Suspense
      fallback={
        <div style={style}>
          <Pending />
        </div>
      }
    >
      <Await resolve={loadTeams.teams}>
        {(teams) => children(teams || [], revalidator.state)}
      </Await>
    </React.Suspense>
  );
}

export { AwaitTeams };

import * as React from "react";
import { ContextProvideTeam } from "./ContextTeam.jsx";
import { useAsyncEvent } from "/src/app/index.js";

function StoreProvideTeamClass({ team, children, ...props }) {
  const store = useStoreTeamClass(team);
  return (
    <ContextProvideTeam useSchema={false} team={store} {...props}>
      {children}
    </ContextProvideTeam>
  );
}

function useStoreTeamClass(team) {
  const [store, setStore] = React.useState(team);
  const state = useAsyncEvent(team.merge);

  React.useEffect(() => {
    console.log("TEAM CHANGING");
    // if (mergeTeamState == null) {
    //   team.actions.mergeTeam.onStateChange((state) => setMergeTeamState(state));
    // }
    // console.log(mergeTeamState);
  }, [store]);

  React.useEffect(() => {
    console.log("STATE CHANGE ");
    console.log(state);
  }, [state]);

  return {
    ...store,
    state,
  };
}

export { useStoreTeamClass, StoreProvideTeamClass };

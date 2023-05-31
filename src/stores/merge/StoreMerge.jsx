import * as React from "react";
import { ContextProvideMerge } from "./ContextMerge";
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";

function StoreProvideMerge({ children }) {
  const store = useStoreMerge();
  return <ContextProvideMerge value={store}>{children}</ContextProvideMerge>;
}

function useStoreMerge() {
  const [store, setStore] = React.useState({
    players: new Array(MAX_TEAM_SIZE).fill(null),
  });
  const storeRef = React.useRef(null);
  storeRef.current = store;

  const handlePlayerSelection = () => {};
  const handlePlayerRemoval = () => {};
  const handleWristbandPairToggle = () => {};

  return {
    ...store,
    setStoreMerge: setStore,
    storeMergeRef: storeRef,
    handlePlayerSelection,
    handlePlayerRemoval,
    handleWristbandPairToggle,
  };
}

export { StoreProvideMerge, useStoreMerge };

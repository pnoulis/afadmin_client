import * as React from "react";
import { ContextProvideMerge } from "./ContextMerge";
import { merge } from "/src/links.jsx";

function StoreProvideMerge({ children }) {
  const store = useStoreMerge();
  return <ContextProvideMerge value={store}>{children}</ContextProvideMerge>;
}

function useStoreMerge() {
  const [store, setStore] = React.useState({
    registrationQueue: [],
  });

  return {
    ...store,
    mergeStore: store,
    setMergeStore: setStore,
  };
}

export { StoreProvideMerge, useStoreMerge };

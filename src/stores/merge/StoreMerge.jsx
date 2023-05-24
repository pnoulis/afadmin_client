import * as React from "react";
import { ContextProvideMerge } from "./ContextMerge";

function StoreProvideMerge({ children }) {
  const store = useStoreMerge();
  return <ContextProvideMerge value={store}>{children}</ContextProvideMerge>;
}

function useStoreMerge() {
  const [store, setStore] = React.useState({});
  const storeRef = React.useRef(null);
  storeRef.current = store;

  return {
    ...store,
    setStoreMerge: setStore,
    storeMergeRef: storeRef,
  };
}

export { StoreProvideMerge, useStoreMerge };

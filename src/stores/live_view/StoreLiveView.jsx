import * as React from "react";
import { ContextProvideLiveView } from "./ContextLiveView";

function StoreProvideLiveView({ children }) {
  const store = useStoreLiveView();
  return (
    <ContextProvideLiveView value={store}>{children}</ContextProvideLiveView>
  );
}

function useStoreLiveView() {
  const [store, setStore] = React.useState({});
  const storeRef = React.useRef(null);
  storeRef.current = store;

  return {
    ...store,
    setStoreLiveView: setStore,
    storeLiveViewRef: storeRef,
  };
}

export { StoreProvideLiveView, useStoreLiveView };

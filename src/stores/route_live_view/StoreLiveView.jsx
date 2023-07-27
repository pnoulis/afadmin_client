import * as React from "react";
import { ContextProvideLiveView } from "./ContextLiveView";
import { useContextApp } from "/src/contexts/index.js";
import { liveView } from "/src/links.jsx";
import { afmachine } from "/src/services/afmachine.js";

function StoreProvideLiveView({ children }) {
  const store = useStoreLiveView();
  return (
    <ContextProvideLiveView value={store}>{children}</ContextProvideLiveView>
  );
}

function persistPage(k, v) {
  afmachine.services.storage.client.set((store) => {
    store[liveView.path] = {
      ...store[liveView.path],
      [k]: v,
    };
    return store;
  });
}

function getPage() {
  return afmachine.services.storage.client.get(liveView.path) || {};
}

function useStoreLiveView() {
  const app = useContextApp();
  const [store, setStore] = React.useState(() => ({
      ...getPage(),
    }));

  return {
    app,
    ...store,
    liveViewStore: store,
    setLiveViewStore: setStore,
    persistPage,
    getPage,
  };
}

export { StoreProvideLiveView, useStoreLiveView };

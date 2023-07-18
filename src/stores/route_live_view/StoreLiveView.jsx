import * as React from "react";
import { ContextProvideLiveView } from "./ContextLiveView";
import { useContextApp } from "/src/stores/index.js";
import { liveView } from "/src/links.jsx";
import { Afmachine } from "afmachine";

function StoreProvideLiveView({ children }) {
  const store = useStoreLiveView();
  return (
    <ContextProvideLiveView value={store}>{children}</ContextProvideLiveView>
  );
}

function persistPage(k, v) {
  Afmachine.services.storage.client.set(function (store) {
    store[liveView.path] = {
      ...store[liveView.path],
      [k]: v,
    };
    return store;
  });
}

function getPage() {
  return Afmachine.services.storage.client.get(liveView.path) || {};
}

function useStoreLiveView() {
  const app = useContextApp();
  const [store, setStore] = React.useState(function () {
    return {
      ...getPage(),
    };
  });

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

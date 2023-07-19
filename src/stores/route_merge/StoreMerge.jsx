import * as React from "react";
import { ContextProvideMerge } from "./ContextMerge";
import { useContextApp } from "/src/stores/index.js";
import { merge } from "/src/links.jsx";
import { Afmachine } from '/src/app/afmachine.js'

function StoreProvideMerge({ children }) {
  const store = useStoreMerge();
  return <ContextProvideMerge value={store}>{children}</ContextProvideMerge>;
}

function persistPage(k, v) {
  Afmachine.services.storage.client.set(function (store) {
    store[merge.path] = {
      ...store[merge.path],
      [k]: v,
    };
    return store;
  });
}

function getPage() {
  return Afmachine.services.storage.client.get(merge.path) || {};
}

function useStoreMerge() {
  const app = useContextApp();
  const [store, setStore] = React.useState(function () {
    return {
      ...getPage(),
    };
  });

  return {
    app,
    ...store,
    mergeStore: store,
    setMergeStore: setStore,
    persistPage,
    getPage,
  };
}

export { StoreProvideMerge, useStoreMerge };

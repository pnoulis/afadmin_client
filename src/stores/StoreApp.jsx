import * as React from "react";
import { ContextProvideApp } from "./ContextApp";
import { Afmachine } from "afmachine";

function StoreProvideApp({ children }) {
  const store = useStoreApp();
  return <ContextProvideApp value={store}>{children}</ContextProvideApp>;
}

function useStoreApp() {
  const [store, setStore] = React.useState({
    Afmachine,
    storid: "",
  });

  return {
    ...store,
    store,
    setStore,
  };
}

export { StoreProvideApp, useStoreApp };

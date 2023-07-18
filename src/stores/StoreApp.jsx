import * as React from "react";
import { ContextProvideApp } from "./ContextApp";
import {
  Afmachine,
  persistSession,
  getSession,
  persistClient,
  getClient,
} from "/src/app/afmachine.js";
import { useNavigate } from "react-router-dom";
import { catchAferrs as __catchAferrs } from "/src/err_handling/index.js";

function StoreProvideApp({ children }) {
  const store = useStoreApp();
  return <ContextProvideApp value={store}>{children}</ContextProvideApp>;
}

function useStoreApp() {
  const [store, setStore] = React.useState(function () {
    return {
      ...getSession(),
      ...getClient(),
      Afmachine,
      storid: "",
    };
  });
  const navigate = useNavigate();
  const catchAferrs = React.useCallback(__catchAferrs.bind(null, navigate), []);

  return {
    ...store,
    appStore: store,
    setAppStore: setStore,
    persistSession,
    getSession,
    persistClient,
    getClient,
    catchAferrs,
  };
}

export { StoreProvideApp, useStoreApp };
